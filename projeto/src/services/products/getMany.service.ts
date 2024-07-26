import { productsDatabase } from "../../database/products.database";
import { IProduct } from "../../interfaces/products.interface";

interface Params {
  search?: string;
}

export function getMany({ search }: Params) {
  let results: IProduct[] = [];

  if (search) {
    const searchLowercase = search.toLowerCase();

    results = productsDatabase.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchLowercase) || 
        product.description?.toLowerCase().includes(searchLowercase)
      );
    });
  } else {
    results = productsDatabase;
  }

  return results;
}
