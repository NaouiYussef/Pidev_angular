import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { NgForm } from '@angular/forms/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User = new User();
  userInfo: User = new User();
  constructor(private userService: UserService, private route: Router) { }
  role: string = ''
  ngOnInit(): void {
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
        // Login successful, store access_token and refresh_token in localStorage
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        this.userService.getUserInfo().subscribe(
          (data) => {
            this.userInfo = data;
            
            if (data.roles.name === 'admin') {
              this.route.navigateByUrl('/all')
            }
            if (data.roles.name === 'provider') {
              this.route.navigateByUrl('provider')
            }
            if (data.roles.name === 'consumer') {
              this.route.navigateByUrl('consumer')
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