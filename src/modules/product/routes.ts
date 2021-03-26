// const Router = require("express").Router();
import express from 'express';
import { createProduct, listProducts, deleteProduct, detailProduct, updateProduct } from './controllers'
const Router = express.Router();

const ProductValidate = require("./validations");

Router.route("/products")
  .get(listProducts)
  .post(
    ProductValidate.validateProductCreate,
    createProduct
  );

Router.route("/products/:id")
  .get(detailProduct)
  .patch(
    ProductValidate.validateProductUpdate,
    updateProduct
  )
  .delete(
    ProductValidate.validateProductDelete,
    deleteProduct
  );

module.exports = Router;
// export default Router
