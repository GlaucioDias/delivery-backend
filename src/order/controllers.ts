import Order from "./models/order";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { validationResult } from "express-validator";
// const { validationResult } = require("express-validator");

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

// class OrderController {
//   async store(req, res) {
//     const order = await Order.create(req.body);
//     return res.json(order);
//   }

//   async index(req, res) {
//     const orders = await Order.find({}).populate("items_products");
//     return res.json(orders);
//   }

//   async show(req, res) {
//     const { id } = req.params;
//     const order = await Order.find({ _id: id }).populate("items_products");
//     return res.json(order);
//   }

//   async update(req, res) {
//     const { id } = req.params;
//     const items = req.body;
//     const orderUpdated = await Order.findByIdAndUpdate(id, items, {
//       new: true,
//     });
//     return res.json(orderUpdated);
//   }

//   async delete(req, res) {
//     const { id } = req.params;
//     const items = req.body;
//     const orderRemoved = await Order.findByIdAndUpdate(id, items, {
//       new: true,
//     });
//     return res.json(orderRemoved);
//   }
// }

// export default new OrderController();
