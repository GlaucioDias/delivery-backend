
const { Router } = require('express');
const routes = Router();

const ProductController = require('../controller/productController')

routes.get('/products', ProductController.index)

routes.get('/products/:id', ProductController.show)

routes.post('/products', ProductController.store)

routes.patch('/products/:id', ProductController.update)

routes.delete('/products/:id', ProductController.delete)

module.exports = routes
