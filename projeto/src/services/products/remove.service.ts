import { productsDatabase } from "../../database/products.database";

export function remove(id: number){
    const index = productsDatabase.findIndex(product => product.id === id);

    if(index === -1){
        throw new Error("Product not found.");
    }

    productsDatabase.splice(index, 1);

    return { message: "Product successfully deleted."}
}