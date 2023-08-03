import bodyParser from "body-parser";
import express from "express";
import { serverRouter } from "./web/routes/server.routes";
import { ipPlanRouter } from "./web/routes/ip-plan.routes";
import ErrorHandler from "./web/middlewares/error-handler.middleware";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/servers", serverRouter);
  app.use("/ip-plans", ipPlanRouter);

  app.use(ErrorHandler);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
