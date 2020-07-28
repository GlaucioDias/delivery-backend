const { config } = require("dotenv");
const { join } = require("path");
const { ok } = require("assert");

const env = process.env.NODE_ENV || "dev";
ok(env === "prod" || env === "dev", "env must be dev or prod");
const configPath = join(__dirname, "./config", `.env.${env}`);
config({
  path: configPath,
});

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const port = normalizePort(process.env.PORT || 4000);
const mongodb = require("./database/mongodb");

function normalizePort(val: number | string): number | string | boolean {
  let port: number = typeof val === "string" ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.database();
    this.middleware();
    this.routes();

    this.express.listen(port, () =>
      console.log(`API running on port: ${port}`)
    );
  }

  database() {
    mongodb.connect();
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
