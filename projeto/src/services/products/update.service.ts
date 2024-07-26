import { productsDatabase } from "../../database/products.database";
import { AppError } from "../../errors/AppError";
import {
  IProduct,
  TUpdateProductData,
} from "../../interfaces/products.interface";

export function update(id: number, body: TUpdateProductData) {
  const currentProduct = productsDatabase.find((product) => product.id === id);

  if (!currentProduct) {
    throw new AppError("Product not found.", 404);
  }

  const now = new Date();

  const updatedProduct: IProduct = {
    ...currentProduct,
    ...body,
    updatedAt: now,
  };

  const index = productsDatabase.findIndex(
    (product) => product.id === currentProduct.id
  );

  productsDatabase.splice(index, 1, updatedProduct);

  return updatedProduct;
}
