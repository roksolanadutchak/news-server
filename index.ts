import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from 'dotenv';
import {cards} from "./dashboard-data";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript server');
});
app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong')
});
app.get('/cards', (req: Request, res: Response) => {
    res.send(JSON.stringify(cards));
})
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
