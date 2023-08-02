import express from "express";
import { ipPlanController } from "../dependecies";

const ipPlanRouter = express.Router();

ipPlanRouter.get("/:id", ipPlanController.getIpPlanById.bind(ipPlanController));
ipPlanRouter.post("/", ipPlanController.createIpPlan.bind(ipPlanController));
ipPlanRouter.put("/:id", ipPlanController.updateIpPlan.bind(ipPlanController));
ipPlanRouter.delete("/:id", ipPlanController.deleteIpPlan.bind(ipPlanController));

export { ipPlanRouter };
