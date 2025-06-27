import process from 'node:process';
import { z } from 'zod';

import 'dotenv/config';

const envSchema = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string(),
  DEEPSEEK_API_KEY: z.string(),
  DEEPSEEK_AI_BASE_URL: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  // Format error messages
  const errorMessages = parsed.error.errors
    .map(e => `${e.path.join('.')}: ${e.message}`)
    .join('; ');
  throw new Error(`Invalid environment variables: ${errorMessages}`);
}

export const env = {
  PORT: parsed.data.PORT,
  DATABASE_URL: parsed.data.DATABASE_URL,
  DEEPSEEK_API_KEY: parsed.data.DEEPSEEK_API_KEY,
  DEEPSEEK_AI_BASE_URL: parsed.data.DEEPSEEK_AI_BASE_URL
};
