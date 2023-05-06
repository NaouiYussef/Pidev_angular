import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-template-admin',
  templateUrl: './template-admin.component.html',
  styleUrls: ['./template-admin.component.css']
})
export class TemplateAdminComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user_role')!='admin')
    this.route.navigateByUrl('body')}
  }


