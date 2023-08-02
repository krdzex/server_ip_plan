import express from "express";
import { serverController } from "../dependecies";

const serverRouter = express.Router();

console.log(serverRouter);
serverRouter.get("/:id", serverController.getServerById.bind(serverController));

export { serverRouter };
