import Order from "./models/order";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { validationResult } from "express-validator";

exports.listOrders = async (request: Request, response: Response) => {
  try {
    const orders = await Order.find().sort([["name", 1]]);
    return response.status(200).json(orders).end();
  } catch (error) {
    console.error(error);
  }
};

exports.createOrder = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.status(422).json({ errors: errors.array() });
      return;
    }

    const { name, address, items_products, canceled } = request.body;
    const test = await Order.findOne({name});
    if(test) return response.status(422).json("Order already exists");
    const orderProfile = await Order.create({
      name,
      address,
      items_products,
      canceled,
    });
    return response.status(200).json(orderProfile)
  } catch (error) {
    return next(response.status(500).json(error));
  }
};

