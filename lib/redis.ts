import { createClient } from 'redis';

const redis = createClient({
  url: process.env.REDIS_URL,
});

redis.on('error', (err) => console.log('Redis Client Error', err));

// We don't need to call redis.connect() because the client
// will automatically connect when a command is sent.

export default redis;
