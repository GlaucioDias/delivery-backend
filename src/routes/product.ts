// const Router = require("express").Router();
import * as express from 'express';
const Router = express.Router();
const ProductController = require("../controller/product");
const ProductValidate = require("../controller/productValidate");

Router.route("/products")
  .get(ProductController.listProducts)
  .post(
    ProductValidate.validateProductCreate,
    ProductController.createProduct
  );

Router.route("/products/:id")
  .get(ProductController.detailProduct)
  .patch(
    ProductValidate.validateProductUpdate,
    ProductController.updateProduct
  )
  .delete(
    ProductValidate.validateProductDelete,
    ProductController.deleteProduct
  );

module.exports = Router;
// export default Router
