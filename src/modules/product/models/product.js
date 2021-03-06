"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        Currency: "BRL",
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
    capped: { size: 1024 },
    bufferCommands: false,
    autoCreate: false
});
exports.default = mongoose_1.default.model("products", productSchema);
//# sourceMappingURL=product.js.map