import { productsDatabase } from "../../database/products.database";
import { IProduct } from "../../interfaces/products.interface";

interface Params {
  search?: string;
  skip?: number;
  count?: number;
}

// Count - quantidade de itens por página
// Skip - quantidade de itens que eu devo pular

// 30 Produtos (Count: 10)
// Skip: 0
// Skip: 10
// Skip: 20

export function getMany({ search, skip = 0, count = 10 }: Params) {
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

  const firstIndex = skip;
  const lastIndex = skip + count;
  const pagedResults = results.slice(firstIndex, lastIndex);

  return { count: results.length, pagedResults };
}
