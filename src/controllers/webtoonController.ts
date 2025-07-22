import { Request, Response } from "express";
import db from "../db/query";

async function getAllWebtoons(req: Request, res: Response) {
    const webtoons = await db.getAllWebtoons();

    console.log(webtoons);

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
    db.insertWebtoon(title, author, genre);
    res.redirect("/");
}

async function updateWebtoonGet(req: Request, res: Response) {
    const { id } = req.params;
    const webtoon = await db.getWebtoonById(Number(id));
    res.render("updateWebtoon", { title: "Update", webtoon: webtoon });
}

async function updateWebtoonPost(req: Request, res: Response) {
    const { id } = req.params;
    const { title, author, genre } = req.body;
    await db.updateWebtoon({ id, title, author, genre });
    res.redirect("/");
}

async function deleteWebtoonPost(req: Request, res: Response) {
    const { id } = req.params;
    await db.deleteWebtoonById(id);
    res.redirect("/");
}

export default {
    getAllWebtoons,
    createWebtoonGet,
    createWebtoonPost,
    updateWebtoonGet,
    updateWebtoonPost,
    deleteWebtoonPost
};