import { Request, Response, NextFunction } from "express";
const { validationResult } = require("express-validator");

import Product from './models/product';
// const Product = require("./models/product");
const mongoose = require("mongoose");

export const listProducts = async (
  request: Request, 
  response: Response,
  next: NextFunction
  ) => {
  try {
    const products = await Product.find().sort([
      ["name", 1],
      // ["price", 1],
    ]);
    console.log(products)
    return response.status(200).json(products).end();
  } catch (error) {
    console.log(error)  
    return next(response.status(500).json(error));
  }
};

export const createProduct = async (
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
    const { name, description, price } = request.body;
    const test = await Product.findOne({
      name,
    });
    if (test) return response.status(422).json("product already exists");
    const productProfile = await Product.create({
      name,
      description,
      price,
    });
    return response.status(200).json(productProfile);
  } catch (error) {
    return next(response.status(500).json(error));
  }
};

export const detailProduct = async (request: Request, response: Response) => {
  try {
    const productId = request.params.id;
    if (!mongoose.isValidObjectId(productId))
      return response.status(422).json("Product is not valid");

    const productProfile = await Product.findById(productId);
    if (!productProfile) return response.status(422).json("Product not exist");
    return response.status(200).json(productProfile);
  } catch (error) {
    console.log(error);
    return response.status(500).json("error");
  }
};

export const updateProduct = async (request: Request, response: Response) => {
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
    const productProfile = await Product.findById(productId);
    if (!productProfile) return response.status(422).json("Product not exist");
    await Product.updateOne(
      { _id: productProfile._id },
      {
        $set: {
          name: product.name,
        },
      }
    );
    return response.status(200).json("ok");
  } catch (error) {
    console.log(error);
    return response.status(500).json("error");
  }
};

export const deleteProduct = async (request: Request, response: Response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.status(422).json({ errors: errors.array() });
      return;
    }
    const productId = request.params.id;
    if (!mongoose.isValidObjectId(productId))
      return response.status(422).json("Product is not valid");
    const productProfile = await Product.findById(productId);
    if (!productProfile) return response.status(422).json("Product not exist");
    await Product.deleteOne({ _id: productProfile._id });
    return response.status(200).json("ok");
  } catch (error) {
    console.log(error);
    return response.status(500).json("error");
  }
};
