import { productsDatabase } from "../../database/products.database";
import { AppError } from "../../errors/AppError";

export function remove(id: number){
    const index = productsDatabase.findIndex(product => product.id === id);

    if(index === -1){
        throw new AppError("Product not found.", 404);
    }

    productsDatabase.splice(index, 1);

    return { message: "Product successfully deleted."}
}