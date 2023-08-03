import express from "express";
import { serverController } from "../dependecies";
import { ValidateRequestMiddleware } from "@middlewares/validate-request.middleware";
import { CreateServerDto } from "@dtos/servers/create-server.dto";
import { UpdateServerDto } from "@dtos/servers/update-server.dto";

const serverRouter = express.Router();

serverRouter.get("/:id", serverController.getServerById.bind(serverController));
serverRouter.get(
  "/",
  serverController.getServersPagination.bind(serverController)
);

serverRouter.put(
  "/:id",
  ValidateRequestMiddleware.with(UpdateServerDto),
  serverController.updateServer.bind(serverController)
);

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
