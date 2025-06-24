import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../app'; // Adjust the import path to your Express app

describe('gET /', () => {
  it('should return 200 and expected response', async () => {
    const res = await await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello,World!' });
  });
});
