import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandes : Commande[];
  date: Date;
  constructor(private commandeService: CommandeService,private cartService: CartService) { 
    this.date = new Date();
  }

  ngOnInit(): void {
    this.getAllCommandes();
  }
  private getAllCommandes(){
    this.commandeService.getCommandes().subscribe(res => {
      this.commandes = res;
      console.log("aaaaaaaaaa",this.commandes)
    })  
  }
 
}
