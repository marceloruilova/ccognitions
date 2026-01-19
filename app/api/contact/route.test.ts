import { POST } from './route';
import { NextRequest } from 'next/server';
import { kv } from '@vercel/kv';

jest.mock('@vercel/kv', () => ({
  kv: {
    get: jest.fn(),
    incr: jest.fn(),
    expire: jest.fn(),
  },
}));

describe('POST /api/contact', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 429 if rate limit is exceeded', async () => {
    (kv.get as jest.Mock).mockResolvedValue(100); // DAILY_LIMIT is 90

    const request = new NextRequest('https://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        message: 'Test message',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(429);
    expect(body.error).toBe('contact.dailyLimitReached');
  });

  it('should return 200 and send email if rate limit is not exceeded', async () => {
    (kv.get as jest.Mock).mockResolvedValue(50);

    const request = new NextRequest('https://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        message: 'Test message',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Mocking resend.emails.send
    const resendMock = {
      emails: {
        send: jest.fn().mockResolvedValue({ data: {}, error: null }),
      },
    };
    jest.mock('resend', () => ({
      Resend: jest.fn(() => resendMock),
    }));

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(kv.incr).toHaveBeenCalled();
    expect(kv.expire).toHaveBeenCalled();
  });
});
