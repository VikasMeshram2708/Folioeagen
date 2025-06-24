import type { Request, Response } from 'express';
import process from 'node:process';

export function errorHandler(err: Error, req: Request, res: Response) {
  const statusCode = req.statusCode !== 200 ? req.statusCode : 500;
  res.status(statusCode as number);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🍰' : err.stack,
  });
}
