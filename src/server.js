
const { config } = require('dotenv')
const { join } = require('path')
const { ok } = require('assert')

const env = process.env.NODE_ENV || 'dev'
ok(env === 'prod' || env === 'dev', 'env must be dev or prod')
const configPath = join(__dirname, './config', `.env.${env}`)
config({
    path: configPath
})

// console.log(configPath)

const port = process.env.PORT;
const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('./database/mongodb')

class App {
    constructor() {
        this.express = express()
        this.database()
        this.middleware()
        this.routes()

        this.express.listen(port, () => console.log(`API running on port: ${port}`))
    }

    database() {
        mongodb.connect()
    }

    middleware() {
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
    }

    routes() {
        this.express.use(require('./routes/productRoutes'))
        this.express.use(require('./routes/orderRoutes'))
    }
}
module.exports = new App().express