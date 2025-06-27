import type { NextFunction, Request, Response } from 'express';
import { OpenAI } from 'openai';
import { env } from '../../../env';

export async function chatController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const client = new OpenAI({
      apiKey: env.OPEN_AI_API_KEY,
      baseURL: env.OPEN_AI_BASE_URL ?? '',
    });
    const response = await client.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'assistant',
          content: 'Talk like lord ram.',
        },
        {
          role: 'user',
          content: 'who is bhagwan shankar.',
        },
      ],
      max_completion_tokens: 10,
    });
    console.log('processing...');
    res.json({
      message: response.choices[0].message.content,
    });
  } catch (error) {
    next(error);
  }
}
