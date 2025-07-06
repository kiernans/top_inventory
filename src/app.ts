import express, { Express, Request, Response, NextFunction } from "express";
import webtoonRouter from "./routes/webtoonRouter";
import path from "node:path";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();

const app: Express = express();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// Set up parsing into req.body
app.use(express.urlencoded({ extended: true }));

app.use("/", webtoonRouter);

const PORT = process.env.EXPRESS_PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send(err.message);
});