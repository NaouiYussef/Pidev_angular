import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-validation-commande',
  templateUrl: './validation-commande.component.html',
  styleUrls: ['./validation-commande.component.css']
})
export class ValidationCommandeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService:CartService) { }
  idCart:number;
  cart: Cart= new Cart();
  ngOnInit(): void {
  this.route.params.subscribe(params => {
  this.idCart = +params['id'];
});


    console.log("moooon caaart", this.idCart)

this.addCommande();
  }
  public addCommande(): void {

    
    this.cartService.EditCart(this.idCart).subscribe(res=>
      {
       this.cart=res;
     
      }
      )    

  }



}
