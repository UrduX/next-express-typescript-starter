import express, { Application, Request, Response } from "express";
import next from "next";
import dotenv from "dotenv";
dotenv.config();

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app: Application = express();

  app.all("*", (req: Request, res: Response) => nextHandler(req, res));

  app.listen(port, () => console.log(`> Ready on http://localhost:${port}`));
});
