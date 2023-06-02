"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const dashboard_data_1 = require("./dashboard-data");
const full_card_data_1 = require("./full-card-data");
const full_card_data_2 = require("./full-card-data");
const full_card_data_3 = require("./full-card-data");
const full_card_data_4 = require("./full-card-data");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
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
