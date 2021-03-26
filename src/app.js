"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { config } = require("dotenv");
const { join } = require("path");
const { ok } = require("assert");
const env = process.env.NODE_ENV || "dev";
ok(env === "prod" || env === "dev", "environment inválida! Ou prod ou dev");
const configPath = join(__dirname, './config', `.env.${env}`);
config({
    path: configPath
});
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.express = express_1.default();
        this.middleware();
        this.routes();
    }
    middleware() {
        console.log(configPath);
        this.express.use(cors_1.default());
        this.express.use(express_1.default.json());
    }
    routes() {
        this.express.use(require("./modules/product/routes"));
        this.express.use(require("./modules/order/routes"));
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map