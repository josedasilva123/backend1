import { generateId, productsDatabase } from "../../database/products.database";
import { AppError } from "../../errors/AppError";
import {
  IProduct,
  TCreateProductData,
} from "../../interfaces/products.interface";

export function create(body: TCreateProductData) {
  const { name, description, price } = body;

  const now = new Date();

  if (!name || !price) {
    throw new AppError(
      "Missing body parameter (expected name, price, description?).",
      400
    );
  }

  const newProduct: IProduct = {
    id: generateId(),
    name: name,
    description: description,
    price: price,
    createdAt: now,
  };

  productsDatabase.push(newProduct);

  return newProduct;
}
