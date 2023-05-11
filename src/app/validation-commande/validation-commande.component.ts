import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart';
import { Router } from '@angular/router';
@Component({
  selector: 'app-validation-commande',
  templateUrl: './validation-commande.component.html',
  styleUrls: ['./validation-commande.component.css']
})
export class ValidationCommandeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService:CartService,private router: Router) { }
  id:number;
  cart: Cart= new Cart();
  ngOnInit(): void {
  this.route.params.subscribe(params => {
  this.id = +params['id'];
});


    console.log("moooon caaart", this.id)

this.addCommande();
  }
  public addCommande(): void {

    
    this.cartService.EditCart(this.id).subscribe(res=>
      {
       this.cart=res;
     
      }
      )    

  }

  

}
