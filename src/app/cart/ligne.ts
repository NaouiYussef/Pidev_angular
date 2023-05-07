import { Product } from "../Product/product";
import { User } from "../user/user";
import { Cart } from "./cart";
import { etat } from "./etat";

export class ligne{
    id: number;
    quantity: number;
    prixT: number;
    product: Product;
    panier: Cart;
}
