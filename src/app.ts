const { config } = require("dotenv");
const { join } = require("path");
const { ok } = require("assert");

const env = process.env.NODE_ENV || "dev"
ok(env === "prod" || env === "dev", "environment inválida! Ou prod ou dev")

const configPath = join('./config', `.env.${env}`)

config({
    path: configPath
})


import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(cors());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(bodyParser.json());
  }

  private routes(): void {
    // this.express.use(require('./routes/productRoutes'))
    this.express.use(require("./modules/product/routes"));
    this.express.use(require("./modules/order/routes"));
  }
}
// module.exports = new App().express;
export default new App().express;
