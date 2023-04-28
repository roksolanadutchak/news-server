"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
const corsOptions = {
    origin: `http://localhost:3000`,
    optionsSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
app.get('/', (req, res) => {
    res.send('Express + TypeScript server');
});
app.get('/ping', (req, res) => {
    res.send('Pong');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
