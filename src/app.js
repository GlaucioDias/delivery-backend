"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.config();
class App {
    constructor() {
        this.express = express_1.default();
        this.middleware();
        this.routes();
    }
    middleware() {
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