import { productsDatabase } from "../../database/products.database";

export function getOne(id: number) {
  const product = productsDatabase.find((product) => product.id === id);

  if (!product) {
    throw new Error("Product not found.");
  }

  return product;
}
