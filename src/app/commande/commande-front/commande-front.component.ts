import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';
import { CartService } from 'src/app/cart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { LigneService } from 'src/app/cart/ligne.service';
import { ligne } from 'src/app/cart/ligne';
@Component({
  selector: 'app-commande-front',
  templateUrl: './commande-front.component.html',
  styleUrls: ['./commande-front.component.css']
})
export class CommandeFrontComponent implements OnInit {
  commande : Commande;
  constructor(private route: ActivatedRoute, private ligneService: LigneService ,private cartService: CartService) { }
  cartid:number;
  ligne : ligne[];

  ngOnInit():  void {
    this.route.params.subscribe(params => {
      this.cartid = +params['id'];
    });
    this.getAlllines()
  
  }


  private getAlllines(){

    this.ligneService.getLigne(this.cartid).subscribe(res => {
      
      this.ligne = res;
     
    });

}
}