import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../assets/css/style.css']
})
export class HeaderComponent implements OnInit {
  token: any;
  userRole: string | null;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('access_token');
    this.userRole = sessionStorage.getItem('user_role');
    console.log(this.token);
    console.log(this.userRole);
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  logout() {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    sessionStorage.removeItem('user_role');
    this.route.navigate(['body']);
    this.token = false;
    this.userRole = null;
  }
}
