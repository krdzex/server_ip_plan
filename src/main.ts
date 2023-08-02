import bodyParser from "body-parser";
import express from "express";
import { serverRouter } from "./web/routes/server.routes";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/servers", serverRouter);

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
