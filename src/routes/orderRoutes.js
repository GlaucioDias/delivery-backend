const { Router } = require('express');
const routes = Router();

const OrderController = require('../controller/orderController')

routes.get('/orders', OrderController.index)

routes.get('/orders/:id', OrderController.show)

routes.post('/orders', OrderController.store)

routes.patch('/orders/:id', OrderController.update)

routes.delete('/orders/:id', OrderController.delete)

module.exports = routes
