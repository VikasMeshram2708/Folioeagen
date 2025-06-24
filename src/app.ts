import express, { Request, Response } from "express";

import cors from "cors";
import helmet from "helmet";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// routes
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello,World!",
  });
});
export default app;
