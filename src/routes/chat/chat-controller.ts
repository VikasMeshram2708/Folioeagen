import type { NextFunction, Request, Response } from 'express';

export async function chatController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.json({
      message: 'Hey, from chat',
    });
  } catch (error) {
    next(error);
  }
}
