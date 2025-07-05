import { Request, Response } from "express";
import db from "../db/query";

async function manhwaController(req: Request, res: Response) {
    const webtoons = await db.getAllEntries();
    res.render("index", { title: "Home", webtoons: webtoons });
}

export default manhwaController;