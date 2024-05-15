import { createClient } from 'redis';

const redisclient = redis.createClient();

class RedisClient {
    constructor () {
        this.client = redis.createClient();
    }
    isAlive() {
        return this.client.connected;
    }

    async get(key) {
        const keyRedis = promisify(this.client.get).bind(this.client);
        const valRedis = await keyRedis(key);
        return valRedis;
    }
    async set(key, value, duration) {
        await this.client.set(key, value);
        await this.client.expire(key, duration);
    }
    async del(key) {
        await this.client.del(key);
    }
};

const redisClient = new RedisClient();
export default redisclient;
