import { Cart } from "../cart/cart";
import { User } from "../user/user"

export class Commande {
    commande_id: number;
    consumer: User;
    prix_total: number;
    date_commande: Date;
    shoppingCart: Cart;




}
