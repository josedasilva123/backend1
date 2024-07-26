import { productsDatabase } from "../../database/products.database";
import { AppError } from "../../errors/AppError";

export function getOne(id: number) {
  const product = productsDatabase.find((product) => product.id === id);

  if (!product) {
    throw new AppError("Product not found.", 404);
  }

  return product;
}
