import mongoose, { Document } from "mongoose";

interface Product extends Document {
  name: string;
  description: string;
  price: number;
}
const productSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
    capped: { size: 1024 },
    bufferCommands: false,
    autoCreate: false
  }
);
export default mongoose.model<Product>("products", productSchema);
