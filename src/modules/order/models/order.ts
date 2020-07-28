// const mongoose = require("mongoose");
import mongoose, { Document } from "mongoose";

interface Order extends Document {
  name: string;
  address: string;
  items_products: [];
  canceled: boolean;
}

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    items_products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        require: true,
      },
    ],
    canceled: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Order>("orders", orderSchema);