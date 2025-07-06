import { Router } from "express";
import webtoonController from "../controllers/webtoonController"

const indexRouter = Router();

indexRouter.get("/", webtoonController.getAllWebtoons);
indexRouter.get("/create", webtoonController.createWebtoonGet);
indexRouter.post("/create", webtoonController.createWebtoonPost);

export default indexRouter;