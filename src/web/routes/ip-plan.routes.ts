import express from "express";
import { ipPlanController } from "../dependecies";
import { ValidateRequestMiddleware } from "../middlewares/validate-request.middleware";
import { CreateIpPlanDto } from "../../data/dtos/ip-plans/create-ip-plan.dto";
import { UpdateIpPlanDto } from "../../data/dtos/ip-plans/update-ip-plan.dto";

const ipPlanRouter = express.Router();

ipPlanRouter.get("/:id", ipPlanController.getIpPlanById.bind(ipPlanController));
ipPlanRouter.get(
  "/",
  ipPlanController.getIpPlansPagination.bind(ipPlanController)
);

ipPlanRouter.post(
  "/",
  ValidateRequestMiddleware.with(CreateIpPlanDto),
  ipPlanController.createIpPlan.bind(ipPlanController)
);

ipPlanRouter.put(
  "/:id",
  ValidateRequestMiddleware.with(UpdateIpPlanDto),
  ipPlanController.updateIpPlan.bind(ipPlanController)
);

ipPlanRouter.delete(
  "/:id",
  ipPlanController.deleteIpPlan.bind(ipPlanController)
);

export { ipPlanRouter };
