import { check, param } from "express-validator";
import ProductModel from "../model/product";

exports.validate = (method: string) => {
  switch (method) {
    case "createProduct": {
      return [
        check("name")
          .exists()
          .withMessage("product must have a name!")
          .isString()
          .withMessage("Must "),
        check("description").isString(),
        check("price", "must be numeric").isNumeric().isCurrency(),
      ];
    }
    case "updateProduct": {
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
    }
    case "deleteProduct": {
      return [param("id", "Invalid ID").isMongoId()];
    }
  }
};
