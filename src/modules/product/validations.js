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
exports.validateProductDelete = exports.validateProductUpdate = exports.validateProductCreate = void 0;
const express_validator_1 = require("express-validator");
const product_1 = __importDefault(require("./models/product"));
const validateProductCreate = () => {
    return [
        express_validator_1.check("name")
            .exists()
            .withMessage("product must have a name!")
            .isString()
            .withMessage("Must "),
        express_validator_1.check("description").isString(),
        express_validator_1.check("price", "must be numeric").isNumeric().isCurrency(),
    ];
};
exports.validateProductCreate = validateProductCreate;
const validateProductUpdate = () => {
    return [
        express_validator_1.param("id", "Invalid ID")
            .isMongoId()
            .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const product = yield product_1.default.findById(value);
                if (!product)
                    return Promise.reject();
                return product;
            }
            catch (error) {
                return error;
            }
        })),
    ];
};
exports.validateProductUpdate = validateProductUpdate;
const validateProductDelete = () => {
    return [express_validator_1.param("id", "Invalid ID").isMongoId()];
};
exports.validateProductDelete = validateProductDelete;
//# sourceMappingURL=validations.js.map