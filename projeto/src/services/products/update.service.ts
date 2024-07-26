// PUT
// Substituir recursos por completo (1 ou mais recursos)
// Patch
// Atualização parcial

import { productsDatabase } from "../../database/products.database";
import {
  IProduct,
  TUpdateProductData,
} from "../../interfaces/products.interface";

export function update(id: number, body: TUpdateProductData) {
  const currentProduct = productsDatabase.find((product) => product.id === id);

  if (!currentProduct) {
    throw new Error("Product not found.");
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
