import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { RoleService } from './role/role.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardBackComponent } from './dashboard-back/dashboard-back.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateUserComponent } from './template-user/template-user.component';
import { BodyUserComponent } from './body-user/body-user.component';
import { TemplateAdminComponent } from './template-admin/template-admin.component';
import { BodyAdminComponent } from './body-admin/body-admin.component';
import { FooterBackComponent } from './footer-back/footer-back.component';
import { SidebarBackComponent } from './sidebar-back/sidebar-back.component';
import { NavbarBackComponent } from './navbar-back/navbar-back.component';
import {CategoryComponent} from "./category/category/category.component";
import {CategoryFormComponent} from "./category/category-form/category-form.component";
import {CategoryUpdateComponent} from "./category/category-update/category-update.component";
import {ProductComponent} from "./Product/product/product.component";
import {ProductFormComponent} from "./Product/product-form/product-form.component";
import {ProductUpdateComponent} from "./Product/product-update/product-update.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";


import { PostComponent } from './post/view-post/post.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { ViewSubredditComponent } from './subreddit/view-subreddit/view-subreddit.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { UpdateSubredditComponent } from './subreddit/update-subreddit/update-subreddit.component';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';
import { ViewCommentComponent } from './comment/view-comment/view-comment.component';
import { ProductFrontComponent } from './Product/product-front/product-front.component';
import { ProductDetailsFrontComponent } from './product-details/product-details-front/product-details-front.component';
import { ChangemdpComponent } from './changemdp/changemdp.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';


import {MSAL_INSTANCE, MsalModule, MsalService} from "@azure/msal-angular";
import {IPublicClientApplication, PublicClientApplication} from "@azure/msal-browser";
import { SlaComponent } from './sla/sla.component';
import { SlaBackComponent } from './sla/sla-back/sla-back.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '566e9ff0-a812-40cc-900c-2de7f0ab4c0e',
      redirectUri: 'http://localhost:4200',
      postLogoutRedirectUri: 'http://localhost:4200'
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RoleComponent,
    SigninComponent,
    SignupComponent,
    DashboardBackComponent,

    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    TemplateUserComponent,
    BodyUserComponent,
    TemplateAdminComponent,
    BodyAdminComponent,
    FooterBackComponent,
    SidebarBackComponent,
    NavbarBackComponent,
    CategoryComponent,
    CategoryFormComponent,
    CategoryUpdateComponent,
    ProductComponent,
    ProductFormComponent,
    ProductUpdateComponent,
    ProductDetailsComponent,
    PostComponent,
    CreatePostComponent,
    EditPostComponent,
    ViewSubredditComponent,
    CreateSubredditComponent,
    UpdateSubredditComponent,
    CreateCommentComponent,
    ViewCommentComponent,
    ProductFrontComponent,
    ProductDetailsFrontComponent,
    ChangemdpComponent,
    UpdatepasswordComponent,
    SlaComponent,
    SlaBackComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MsalModule
  ],
  providers: [UserService, RoleService, MsalService,
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
