import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { NgForm } from '@angular/forms';
import {AuthenticationResult} from "@azure/msal-browser";
import {MsalService} from "@azure/msal-angular";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../signup/signup.component.css']
})
export class SigninComponent implements OnInit {
  user: User = new User();
  userInfo: User = new User();
  constructor(private userService: UserService, private route: Router, private msalService: MsalService) { }
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
        // Login successful, store access_token and refresh_token in sessionStorage
        sessionStorage.setItem('access_token', response.access_token);
        sessionStorage.setItem('refresh_token', response.refresh_token);

        this.userService.getUserInfo().subscribe(
          (data) => {
            this.userInfo = data;
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


  loginWithMicrosoft(){
    // Redirect to Microsoft sign in page
    //this.msalService.loginRedirect()
    // Popup page for Microsoft authentification
    this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account);
      const accessToken = this.msalService.instance.getActiveAccount().idToken;
      sessionStorage.setItem('access_token', accessToken);
      sessionStorage.setItem('user_role', 'azure' );
      //this.roleService.getRoleByName('azure').subscribe((role: Role) => {
      this.user = {
        idUser: 0,
        username: this.msalService.instance.getActiveAccount().name,
        mail: this.msalService.instance.getActiveAccount().idTokenClaims.preferred_username,
        password: "unknown",
        verifPassword: "unkown",
        roles: {id: 4, name: 'azure'},
        roleName: "Default"
      };
      console.log(this.user);
      this.userService.addUsersMicrosoft(this.user).subscribe();
      //});
      this.route.navigateByUrl('body')
    })


  }

}
