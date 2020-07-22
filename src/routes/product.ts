const Router = require("express").Router();
const ProductController = require("../controller/product");
const ProductValidate = require("../controller/productValidate");

Router.route("/products")
  .get(ProductController.listProducts)
  .post(
    ProductValidate.validate("createProduct"),
    ProductController.createProduct
  );

Router.route("/products/:id")
  .get(ProductController.detailProduct)
  .patch(
    ProductValidate.validate("updateProduct"),
    ProductController.updateProduct
  )
  .delete(
    ProductValidate.validate("deleteProduct"),
    ProductController.deleteProduct
  );

module.exports = Router;
