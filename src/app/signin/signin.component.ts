import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { NgForm } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../signup/signup.component.css']
})
export class SigninComponent implements OnInit {
  user: User = new User();
  userInfo: User = new User();
  constructor(private userService: UserService, private route: Router, private cartService: CartService) { }
  role: string = ''
  ngOnInit(): void {

    if (sessionStorage.getItem('access_token') !== null && sessionStorage.getItem('access_token') !== undefined) {
      this.route.navigateByUrl('body')}
    this.userService.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
        

      },
      (error) => {
        console.log(error);
      }
    );

  }
  login(myForm: NgForm) {
    this.userService.login(this.user.mail, this.user.password).subscribe(
      (response: any) => {
        console.log(response)
        // Login successful, store access_token and refresh_token in sessionStorage
        sessionStorage.setItem('access_token', response.access_token);
        sessionStorage.setItem('refresh_token', response.refresh_token);
       
        this.userService.getUserInfo().subscribe(
          (data) => {

            this.userInfo = data;
            const cart:Cart={
              id:0,
              user: this.userInfo,
              Total:0

            
            
            }
            console.log("id user: ",this.userInfo.idUser );
            this.cartService.AddCart(this.userInfo).subscribe(
              (cart: Cart) => {
                console.log('Received cart:', cart);
                // Do something with the cart, such as updating the UI
              },
              (error: any) => {
                console.error('Error occurred:', error);
                // Handle the error, such as displaying an error message
              }
            );
            
            sessionStorage.setItem('user_role', data.roles.name );
            if (data.roles.name === 'admin') {
              this.route.navigateByUrl('body')
            }
            if (data.roles.name === 'provider') {
              this.route.navigateByUrl('body') 
            }
            if (data.roles.name === 'consumer') {
              this.route.navigateByUrl('body')
            }
          },
          (error) => {
            console.log(error);
          }
        );
        
      },
      (error) => {
        // Login failed, display error message to user
        console.error(error);
      })



  }
  test() {
    console.log("aaaaaaaaaaa")
    this.role = this.userInfo.roles.name
   }

}