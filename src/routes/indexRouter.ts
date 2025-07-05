import { Router } from "express";
import manhwaController from "../controllers/manhwaController"

const indexRouter = Router();

indexRouter.get("/", manhwaController);

export default indexRouter;