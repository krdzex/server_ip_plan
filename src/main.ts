import bodyParser from "body-parser";
import express from "express";
import { serverRouter } from "./web/routes/server.routes";
import { ipPlanRouter } from "./web/routes/ip-plan.routes";
import { ValidationException } from "./logic/services/exceptions/validation.exception";
import { BaseHttpResponse } from "./web/base-http-response";
import { ServerNotFoundException } from "./logic/services/exceptions/server-not-found.exception";
import { IpPlanNotFoundException } from "./logic/services/exceptions/ip-plan-not-found.exception";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/servers", serverRouter);
  app.use("/ip-plans", ipPlanRouter);

  app.use((err: any, req: any, res: any, next: any) => {
    if (err instanceof ValidationException) {
      const response = BaseHttpResponse.failed(err.message, 422);
      return res.status(response.statusCode).json(response);
    }

    if (err instanceof ServerNotFoundException) {
      const response = BaseHttpResponse.failed(err.message, 404);
      return res.status(response.statusCode).json(response);
    }

    if (err instanceof IpPlanNotFoundException) {
      const response = BaseHttpResponse.failed(err.message, 404);
      return res.status(response.statusCode).json(response);
    }

    next();
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
