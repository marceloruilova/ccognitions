import { getRedis } from '@/lib/redis';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// HTML escape function to prevent XSS in email templates
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Daily limit (Resend free tier: 100 emails/day, we'll use 90 to be safe)
const DAILY_LIMIT = 90;

export async function POST(request: NextRequest) {
  const today = new Date().toISOString().split('T')[0];
  const ip = request.ip ?? 'unknown';
  const redisKey = `contact-form-rate-limit:${today}:${ip}`;

  try {
    const redis = await getRedis();

    // Check if limit exceeded
    const countString = await redis.get(redisKey);
    const count = countString ? parseInt(countString, 10) : 0;

    if (count >= DAILY_LIMIT) {
      return NextResponse.json(
        {
          error: 'contact.dailyLimitReached'
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, company, email, message, website } = body;

    // Honeypot check - if website field is filled, it's likely a bot
    if (website) {
      // Silently reject but return success to not alert bots
      return NextResponse.json(
        {
          success: true,
          message: 'contact.messageSentSuccess',
        },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'contact.requiredFields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'contact.invalidEmail' },
        { status: 400 }
      );
    }

    // Escape user input to prevent XSS
    const safeName = escapeHtml(name);
    const safeCompany = company ? escapeHtml(company) : '';
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Formulario de Contacto <marceloruilova@ccognitions.com>',
      to: [process.env.BUSINESS_EMAIL || 'marceloruilova@ccognitions.com'],
      reply_to: email,
      subject: `Nuevo mensaje de contacto: ${safeName}`,
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
                <h2>Nuevo Mensaje de Contacto</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nombre:</div>
                  <div class="value">${safeName}</div>
                </div>
                ${safeCompany ? `
                <div class="field">
                  <div class="label">Empresa:</div>
                  <div class="value">${safeCompany}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${safeEmail}</div>
                </div>
                <div class="field">
                  <div class="label">Mensaje:</div>
                  <div class="message-box">${safeMessage}</div>
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
        { error: 'contact.sendError' },
        { status: 500 }
      );
    }

    // Increment counter on successful send
    const newCount = await redis.incr(redisKey);
    if (newCount === 1) {
      await redis.expire(redisKey, 86400); // 24 hours in seconds
    }

    return NextResponse.json(
      {
        success: true,
        message: 'contact.messageSentSuccess',
        emailsSentToday: newCount,
        remainingToday: DAILY_LIMIT - newCount
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'contact.internalError' },
      { status: 500 }
    );
  }
}
