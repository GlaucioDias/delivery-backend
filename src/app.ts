const { config } = require("dotenv");
const { join } = require("path");
const { ok } = require("assert");

config()
// const env = process.env.NODE_ENV || "dev"
// ok(env === "prod" || env === "dev", "environment inválida! Ou prod ou dev")

// const configPath = join(__dirname, './config', `.env.${env}`)

// config({
//     path: configPath
// })




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
    console.log(process.env)
    this.express.use(cors());
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(require("./modules/product/routes"));
    this.express.use(require("./modules/order/routes"));
  }
}
export default new App().express;
