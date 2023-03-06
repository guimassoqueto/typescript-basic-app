import express, { Express, Request, Response } from "express";
import { PORT } from "./settings";

const app: Express = express();

app.use("/", (req: Request, res: Response) => {
    return res.json({"hello": "hi"})
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})
