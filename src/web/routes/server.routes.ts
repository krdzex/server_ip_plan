import express from "express";
import { serverController } from "../dependecies";
import { ValidateRequestMiddleware } from "../middlewares/validate-request.middleware";
import { CreateServerDto } from "../../data/dtos/servers/create-server.dto";

const serverRouter = express.Router();

serverRouter.get("/:id", serverController.getServerById.bind(serverController));
serverRouter.put("/:id", serverController.updateServer.bind(serverController));
serverRouter.delete(
  "/:id",
  serverController.deleteServer.bind(serverController)
);
serverRouter.post(
  "/",
  ValidateRequestMiddleware.with(CreateServerDto),
  serverController.createServer.bind(serverController)
);

export { serverRouter };
