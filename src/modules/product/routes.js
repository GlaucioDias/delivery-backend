"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Router = require("express").Router();
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const Router = express_1.default.Router();
const ProductValidate = require("./validations");
Router.route("/products")
    .get(controllers_1.listProducts)
    .post(ProductValidate.validateProductCreate, controllers_1.createProduct);
Router.route("/products/:id")
    .get(controllers_1.detailProduct)
    .patch(ProductValidate.validateProductUpdate, controllers_1.updateProduct)
    .delete(ProductValidate.validateProductDelete, controllers_1.deleteProduct);
module.exports = Router;
// export default Router
//# sourceMappingURL=routes.js.map