import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user';
import { etat } from '../etat';
import { ligne } from '../ligne';
import { LigneService } from '../ligne.service';
import { exit } from 'process';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  productid: number;
  carts: Cart[];
  userInfo: User = new User();
  lignes: ligne[] ;
  monCart : Cart = new Cart();
    id: number;
  constructor(private route: ActivatedRoute, private ligneService:LigneService, private cartService:CartService, private userService:UserService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productid = params['productId'];
    });
    this.getAllCarts();
    this.addLigne();
    this.calculateTotal();
  }
  total: number;

  calculateTotal() {
    let total = 0;
  
    for (let i = 0; i < this.lignes.length; i++) {
      total += this.lignes[i].prixT;
    }
    this.total = total;
  }
  private getLigneProduit(id:number): ligne {
    for (let i=0;i<this.lignes.length;i++) {
      if(this.lignes[i].product.id==this.productid ) {
      
        return this.lignes[i];
   
      }}
      return null;
  }
  private getAllCarts() {
    this.cartService.getCarts().subscribe(res => {
      this.carts = res;
      console.log("my carts" ,this.carts);
      this.userService.getUserInfo().subscribe(
        (data) => {
          this.userInfo = data;
  
          for(let i=0;i<this.carts.length;i++) {
            if((this.carts[i].user.idUser==this.userInfo.idUser)||(this.carts[i].etat===etat.non_Valider)  ) {
              this.ligneService.getLigne(this.carts[i].id).subscribe(res => {
                this.id=this.carts[i].id;
                this.lignes=res;
                this.calculateTotal(); // Move the call to calculateTotal here

               // this.addLigne();
              });
              break;
            }
          }
          console.log("ligne" ,this.userInfo);
        },
        (error) => {
          console.log(error);
        });
    });
  }
  
 private addLigne() {
    const ligneToAdd = this.getLigneProduit(this.productid);
    if (ligneToAdd) {
      this.ligneService.AddLigne(this.id, ligneToAdd).subscribe(
        res => {
        
          this.monCart = res;
        }
      );
    } else {
      for(let i=0;i<this.carts.length;i++) {
        if((this.carts[i].user.idUser==this.userInfo.idUser)||(this.carts[i].etat===etat.non_Valider)  )
     this.ligneService.AddLi(this.carts[i].id,this.productid).subscribe(
      res=> {
        
      }
     )

      }
      }
  }
}  