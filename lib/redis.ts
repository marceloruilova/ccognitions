import { createClient, RedisClientType } from 'redis';

let redis: RedisClientType | null = null;

export async function getRedis(): Promise<RedisClientType> {
  if (!redis) {
    redis = createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    });
    redis.on('error', (err) => console.error('Redis Client Error', err));
  }

  if (!redis.isOpen) {
    await redis.connect();
  }

  return redis;
}

export default { getRedis };
