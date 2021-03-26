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
exports.deleteProduct = exports.updateProduct = exports.detailProduct = exports.createProduct = exports.listProducts = void 0;
const { validationResult } = require("express-validator");
const product_1 = __importDefault(require("./models/product"));
// const Product = require("./models/product");
const mongoose = require("mongoose");
const listProducts = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find().sort([
            ["name", 1],
            // ["price", 1],
        ]);
        console.log(products);
        return response.status(200).json(products).end();
    }
    catch (error) {
        console.log(error);
        return next(response.status(500).json(error));
    }
});
exports.listProducts = listProducts;
const createProduct = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            response.status(422).json({ errors: errors.array() });
            return;
        }
        const { name, description, price } = request.body;
        const test = yield product_1.default.findOne({
            name,
        });
        if (test)
            return response.status(422).json("product already exists");
        const productProfile = yield product_1.default.create({
            name,
            description,
            price,
        });
        return response.status(200).json(productProfile);
    }
    catch (error) {
        return next(response.status(500).json(error));
    }
});
exports.createProduct = createProduct;
const detailProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = request.params.id;
        if (!mongoose.isValidObjectId(productId))
            return response.status(422).json("Product is not valid");
        const productProfile = yield product_1.default.findById(productId);
        if (!productProfile)
            return response.status(422).json("Product not exist");
        return response.status(200).json(productProfile);
    }
    catch (error) {
        console.log(error);
        return response.status(500).json("error");
    }
});
exports.detailProduct = detailProduct;
const updateProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            response.status(422).json({ errors: errors.array() });
            return;
        }
        const productId = request.params.id;
        const product = request.body;
        if (!mongoose.isValidObjectId(productId))
            return response.status(422).json("Product is not valid");
        const productProfile = yield product_1.default.findById(productId);
        if (!productProfile)
            return response.status(422).json("Product not exist");
        yield product_1.default.updateOne({ _id: productProfile._id }, {
            $set: {
                name: product.name,
            },
        });
        return response.status(200).json("ok");
    }
    catch (error) {
        console.log(error);
        return response.status(500).json("error");
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            response.status(422).json({ errors: errors.array() });
            return;
        }
        const productId = request.params.id;
        if (!mongoose.isValidObjectId(productId))
            return response.status(422).json("Product is not valid");
        const productProfile = yield product_1.default.findById(productId);
        if (!productProfile)
            return response.status(422).json("Product not exist");
        yield product_1.default.deleteOne({ _id: productProfile._id });
        return response.status(200).json("ok");
    }
    catch (error) {
        console.log(error);
        return response.status(500).json("error");
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=controllers.js.map