"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { MongoClient, ServerApiVersion } = require('mongodb');
//import mongoose from "mongoose";
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const dashboard_data_1 = require("./dashboard-data");
const full_card_data_1 = require("./full-card-data");
const full_card_data_2 = require("./full-card-data");
const full_card_data_3 = require("./full-card-data");
const full_card_data_4 = require("./full-card-data");
const CommentRouter = require("./routes/comments");
dotenv_1.default.config();
const uri = "mongodb+srv://mongo:H0Tfi7VW7m9yDlJR@cluster0.n5wdmcy.mongodb.net/?retryWrites=true&w=majority";
const app = (0, express_1.default)();
// const port = process.env.PORT;
const port = 8000;
//
app.use((0, cors_1.default)());
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
app.get('/', (req, res) => {
    res.send('Express + TypeScript server');
});
app.get('/ping', (req, res) => {
    res.send('Pong');
});
app.get('/cards', (req, res) => {
    res.send(JSON.stringify(dashboard_data_1.cards));
});
app.get(`/card/1`, (req, res) => {
    res.send(JSON.stringify(full_card_data_1.card1));
});
app.get(`/card/2`, (req, res) => {
    res.send(JSON.stringify(full_card_data_2.card2));
});
app.get(`/card/3`, (req, res) => {
    res.send(JSON.stringify(full_card_data_3.card3));
});
app.get(`/card/4`, (req, res) => {
    res.send(JSON.stringify(full_card_data_4.card4));
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
