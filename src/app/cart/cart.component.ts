import { Component, OnInit } from '@angular/core';
import { LigneService } from './ligne.service';
import { CartService } from './cart.service';
import { ActivatedRoute } from '@angular/router';
import { ligne } from './ligne';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartid: number;
  ligne : ligne[];
  constructor(private route: ActivatedRoute, private ligneService: LigneService,private cartService: CartService) { 
    
  }

  ngOnInit():  void {
    this.route.params.subscribe(params => {
      this.cartid = +params['commande_id'];
    });
    this.getAlllines()
  
  }


  private getAlllines(){

    this.ligneService.getLigne(this.cartid).subscribe(res => {
      
      this.ligne = res;
     
    })
      
  }
 

}
