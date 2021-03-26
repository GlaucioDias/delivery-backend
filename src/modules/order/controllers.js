"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./models/order"));
const express_validator_1 = require("express-validator");
exports.listOrders = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_1.default.find().sort([["name", 1]]);
        return response.status(200).json(orders).end();
    }
    catch (error) {
        console.error(error);
    }
});
exports.createOrder = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = express_validator_1.validationResult(request);
        if (!errors.isEmpty()) {
            response.status(422).json({ errors: errors.array() });
            return;
        }
        const { name, address, items_products, canceled } = request.body;
        const test = yield order_1.default.findOne({ name });
        if (test)
            return response.status(422).json("Order already exists");
        const orderProfile = yield order_1.default.create({
            name,
            address,
            items_products,
            canceled,
        });
        return response.status(200).json(orderProfile);
    }
    catch (error) {
        return next(response.status(500).json(error));
    }
});
//# sourceMappingURL=controllers.js.map