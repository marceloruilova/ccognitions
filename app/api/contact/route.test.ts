import { POST } from './route';
import { NextRequest } from 'next/server';
import * as redisModule from '@/lib/redis';

jest.mock('@/lib/redis', () => ({
  getRedis: jest.fn(),
}));

jest.mock('resend', () => ({
  Resend: jest.fn(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null }),
    },
  })),
}));

describe('POST /api/contact', () => {
  const mockRedis = {
    get: jest.fn(),
    incr: jest.fn(),
    expire: jest.fn(),
  };

  beforeEach(() => {
    (redisModule.getRedis as jest.Mock).mockResolvedValue(mockRedis);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 429 if rate limit is exceeded', async () => {
    mockRedis.get.mockResolvedValue('100'); // DAILY_LIMIT is 90

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
    mockRedis.get.mockResolvedValue('50');
    mockRedis.incr.mockResolvedValue(51);

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

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(mockRedis.incr).toHaveBeenCalled();
    // expire only called when newCount === 1 (first email of the day)
  });

  it('should return 400 if required fields are missing', async () => {
    mockRedis.get.mockResolvedValue('0');

    const request = new NextRequest('https://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        // missing email and message
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('contact.requiredFields');
  });

  it('should return 400 if email is invalid', async () => {
    mockRedis.get.mockResolvedValue('0');

    const request = new NextRequest('https://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        email: 'invalid-email',
        message: 'Test message',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('contact.invalidEmail');
  });

  it('should silently accept honeypot submissions', async () => {
    mockRedis.get.mockResolvedValue('0');

    const request = new NextRequest('https://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        message: 'Test message',
        website: 'http://spam.com', // honeypot field filled
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    // Should not increment counter or send email for honeypot
    expect(mockRedis.incr).not.toHaveBeenCalled();
  });
});
