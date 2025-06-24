import process from 'node:process';
import { z } from 'zod';

import 'dotenv/config';

const envSchema = z.object({
  PORT: z.string(),
  MONGO_URI: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  // Format error messages
  const errorMessages = parsed.error.errors
    .map((e) => `${e.path.join('.')}: ${e.message}`)
    .join('; ');
  throw new Error(`Invalid environment variables: ${errorMessages}`);
}

export const env = {
  PORT: parsed.data.PORT,
  MONGO_URI: parsed.data.MONGO_URI,
};
