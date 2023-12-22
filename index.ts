import express, { Express, Request, Response } from "express";
const { MongoClient, ServerApiVersion } = require('mongodb');
//import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import {cards} from "./dashboard-data";
import {card1} from "./full-card-data";
import {card2} from "./full-card-data";
import {card3} from "./full-card-data";
import {card4} from "./full-card-data";
const CommentRouter = require ("./routes/comments");

dotenv.config();
const uri = "mongodb+srv://mongo:H0Tfi7VW7m9yDlJR@cluster0.n5wdmcy.mongodb.net/?retryWrites=true&w=majority";
const app: Express = express();
// const port = process.env.PORT;
const port = 8000;
//
app.use(cors());
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });
// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);
// const url = "mongodb+srv://mongo:5AQACKfMbf4rX1fu!@cluster0.n5wdmcy.mongodb.net/?retryWrites=true&w=majority";
//
// const connectionParams= {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
// // @ts-ignore
// mongoose.connect(url, connectionParams)
//     .then( () => {
//         console.log('Connected to the database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. ${err}`);
//     })
app.use('/upload', CommentRouter);

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
