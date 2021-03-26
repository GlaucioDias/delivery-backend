"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const controllers = require('../order/controllers');
const validations = require('../order/validations');
const Router = express.Router();
Router.route('/orders')
    .get(controllers.listOrders);
module.exports = Router;
// const { Router } = require('express');
// const routes = Router();
// const OrderController = require('../controller/orderController')
// routes.get('/orders', OrderController.index)
// routes.get('/orders/:id', OrderController.show)
// routes.post('/orders', OrderController.store)
// routes.patch('/orders/:id', OrderController.update)
// routes.delete('/orders/:id', OrderController.delete)
// module.exports = routes
//# sourceMappingURL=routes.js.map