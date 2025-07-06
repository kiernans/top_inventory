import { Request, Response } from "express";
import db from "../db/query";

async function getAllWebtoons(req: Request, res: Response) {
    const webtoons = await db.getAllEntries();

    if (!webtoons) {
        throw new Error("Webtoons not found.")
    }

    res.render("index", { title: "Webtoons", webtoons: webtoons });
}

async function createWebtoonGet(req: Request, res: Response) {
    res.render("createWebtoon", { title: "Create webtoon" });
}

async function createWebtoonPost(req: Request, res: Response) {
    const { title, author, genre } = req.body;
    db.insertEntry(title, author, genre);
    res.redirect("/");
}

export default { getAllWebtoons, createWebtoonGet, createWebtoonPost };