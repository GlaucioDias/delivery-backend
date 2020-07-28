import * as express from 'express'
const controllers = require('../order/controllers')
const validations = require('../order/validations')

const Router = express.Router()

Router.route('/orders')
.get(controllers.listOrders)

module.exports = Router

// const { Router } = require('express');
// const routes = Router();

// const OrderController = require('../controller/orderController')

// routes.get('/orders', OrderController.index)

// routes.get('/orders/:id', OrderController.show)

// routes.post('/orders', OrderController.store)

// routes.patch('/orders/:id', OrderController.update)

// routes.delete('/orders/:id', OrderController.delete)

// module.exports = routes