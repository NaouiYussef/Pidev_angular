import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin/userlist', title: 'User List', class: '' },
  { path: '/admin/category', title: 'Category List', class: '' },
  { path: '/admin/product', title: 'Product',  class: '' },
  { path: '/admin/view-subreddit', title: 'Subreddits',  class: '' },
  { path: '/admin/post', title: 'Posts',  class: '' },
  { path: '/admin/view-comment', title: 'Comments',  class: '' },
  { path: '/admin/rolelist', title: 'Role List',  class: '' },
  { path: '/admin/app-commande', title: 'Command List', class: ''},
  { path: '/admin/sla', title: 'Sla', class: ''},
  { path: '/admin/chatb', title: 'Active Chats', class: ''},
  { path: '/admin/feedbackb', title: 'Feedbacks OnHold', class: ''}

];
@Component({
  selector: 'app-sidebar-back',
  templateUrl: './sidebar-back.component.html',
  styleUrls: ['../template-admin/template-admin.component.css']
})
export class SidebarBackComponent implements OnInit {

  menuItems!: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this.menuItems)
  }

}
