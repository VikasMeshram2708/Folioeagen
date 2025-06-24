import type { Request, Response } from 'express';
import cors from 'cors';

import express from 'express';
import helmet from 'helmet';

import morgan from 'morgan';
import { errorHandler } from './middlewares/error-handler';
import { notFound } from './middlewares/not-found';

import chatRoute from './routes/chat/chat';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(helmet());

// routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello,World!',
  });
});

app.use('/api/workspace', chatRoute);

app.use(notFound);
app.use(errorHandler);
export default app;
