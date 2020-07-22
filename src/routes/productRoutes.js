const { Router } = require("express");
const routes = Router();

const ProductController = require("../controller/product");

routes
  .get("/products", ProductController.index)
  .post("/products", ProductController.store);

routes
  .get("/products/:id", ProductController.show)
  .patch("/products/:id", ProductController.update)
  .delete("/products/:id", ProductController.delete);

// routes.post('/products', ProductController.store)

// routes.patch("/products/:id", ProductController.update);

// routes.delete("/products/:id", ProductController.delete);

module.exports = routes;

//validator (express) typescript testes com jest moongose memory server
