import express from "express";
import { ipPlanController } from "../dependecies";

const ipPlanRouter = express.Router();

ipPlanRouter.get("/:id", ipPlanController.getIpPlanById.bind(ipPlanController));

export { ipPlanRouter };
