import express from 'express';
import { chatController } from './chat-controller';

const router = express.Router();

router.get('/chat', chatController);

export default router;
