import express from "express";
import { serverController } from "../dependecies";

const serverRouter = express.Router();

serverRouter.get("/:id", serverController.getServerById.bind(serverController));
serverRouter.put("/:id", serverController.updateServer.bind(serverController));

export { serverRouter };
