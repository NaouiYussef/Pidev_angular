import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  productid: number;
  carts: Cart[];
  userInfo: User = new User();
  lignes: ligne[] ;
  monCart : Cart = new Cart();
    id: number;
  constructor(private route: ActivatedRoute, private routs: Router, private ligneService:LigneService, private cartService:CartService, private userService:UserService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productid = params['productId'];
    });
    this.getAllCarts();
    this.addLigne();
     this.routs.navigate(['/body']);
  }
  
  private getLigneProduit(id:number): ligne {
    for (let i=0;i<this.lignes.length;i++) {
      if(this.lignes[i].product.id==this.productid) {
      
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
                this.addLigne();
                this.routs.navigate(['/body']);

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
      console.log("aaaaaaaaaaaaaaaaaaa", this.productid);
      this.ligneService.AddLigne(this.id, ligneToAdd).subscribe(
        res => {
        
          this.monCart = res;
          this.routs.navigate(['/body']);
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