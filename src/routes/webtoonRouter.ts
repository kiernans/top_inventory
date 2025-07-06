import { Router } from "express";
import webtoonController from "../controllers/webtoonController"

const webtoonRouter = Router();

webtoonRouter.get("/", webtoonController.getAllWebtoons);
webtoonRouter.get("/create", webtoonController.createWebtoonGet);
webtoonRouter.post("/create", webtoonController.createWebtoonPost);
webtoonRouter.get("/:id/update", webtoonController.updateWebtoonGet);
webtoonRouter.post("/:id/update", webtoonController.updateWebtoonPost);

export default webtoonRouter;