"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const node_path_1 = __importDefault(require("node:path"));
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();
const app = (0, express_1.default)();
app.set("views", node_path_1.default.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use("/", indexRouter_1.default);
const PORT = process.env.EXPRESS_PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});
