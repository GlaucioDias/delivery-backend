import { check, param } from "express-validator";
import ProductModel from "./models/product";

const validateProductCreate = () => {
  return [
    check("name")
      .exists()
      .withMessage("product must have a name!")
      .isString()
      .withMessage("Must "),
    check("description").isString(),
    check("price", "must be numeric").isNumeric().isCurrency(),
  ];
};

const validateProductUpdate = () => {
  return [
    param("id", "Invalid ID")
      .isMongoId()
      .custom(async (value) => {
        try {
          const product = await ProductModel.findById(value);
          if (!product) return Promise.reject();

          return product;
        } catch (error) {
          return error;
        }
      }),
  ];
};

const validateProductDelete = () => {
  return [param("id", "Invalid ID").isMongoId()];
};

export { validateProductCreate, validateProductUpdate, validateProductDelete };

