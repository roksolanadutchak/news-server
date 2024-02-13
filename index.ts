import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from 'dotenv';
import {cards} from "./src/mocks/dashboard-data";
import {card1} from "./src/mocks/full-card-data";
import {card2} from "./src/mocks/full-card-data";
import {card3} from "./src/mocks/full-card-data";
import {card4} from "./src/mocks/full-card-data";
import CommentRouter from "./src/routes/comments";
import { setUPConnection } from "./src/database/db";

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
setUPConnection();
app.use('/comment', CommentRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript server');
});
app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong')
});
app.get('/cards', (req: Request, res: Response) => {
    res.send(JSON.stringify(cards));
})
app.get(`/card/1`, (req: Request, res: Response) => {
    res.send(JSON.stringify(card1));
})
app.get(`/card/2`, (req: Request, res: Response) => {
    res.send(JSON.stringify(card2));
})
app.get(`/card/3`, (req: Request, res: Response) => {
    res.send(JSON.stringify(card3));
})
app.get(`/card/4`, (req: Request, res: Response) => {
    res.send(JSON.stringify(card4));
})
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
