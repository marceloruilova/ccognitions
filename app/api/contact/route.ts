import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting: simple in-memory counter
let emailCount = 0;
let lastResetDate = new Date().toDateString();

// Daily limit (Resend free tier: 100 emails/day, we'll use 90 to be safe)
const DAILY_LIMIT = 90;

export async function POST(request: NextRequest) {
  try {
    // Check and reset daily counter
    const today = new Date().toDateString();
    if (lastResetDate !== today) {
      emailCount = 0;
      lastResetDate = today;
    }

    // Check if limit exceeded
    if (emailCount >= DAILY_LIMIT) {
      return NextResponse.json(
        {
          error: 'Límite diario alcanzado. Por favor, vuelve mañana o contáctanos directamente por teléfono.'
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, company, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor completa todos los campos requeridos.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor ingresa un email válido.' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Formulario de Contacto <onboarding@resend.dev>', // You'll change this later with your verified domain
      to: [process.env.BUSINESS_EMAIL || 'tu-email@ejemplo.com'], // Your business email
      replyTo: email, // User's email for easy reply
      subject: `Nuevo mensaje de contacto: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #667eea; }
              .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
              .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; border-radius: 4px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📧 Nuevo Mensaje de Contacto</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Nombre:</div>
                  <div class="value">${name}</div>
                </div>
                ${company ? `
                <div class="field">
                  <div class="label">🏢 Empresa:</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">💬 Mensaje:</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Error al enviar el mensaje. Por favor intenta de nuevo.' },
        { status: 500 }
      );
    }

    // Increment counter on successful send
    emailCount++;

    return NextResponse.json(
      {
        success: true,
        message: '¡Mensaje enviado exitosamente! Te contactaremos pronto.',
        emailsSentToday: emailCount,
        remainingToday: DAILY_LIMIT - emailCount
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor intenta de nuevo más tarde.' },
      { status: 500 }
    );
  }
}
