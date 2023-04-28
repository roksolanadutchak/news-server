import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
const corsOptions = {
    origin: `http://localhost:3000`,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript server');
});
app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong')
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
