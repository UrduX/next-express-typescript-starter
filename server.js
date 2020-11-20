import express from "express";
import next from "next";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.all("*", (req, res) => nextHandler(req, res));

  app.listen(port, () => console.log(`> Ready on http://localhost:${port}`));
});
