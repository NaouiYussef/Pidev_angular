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
import { RecaptchaModule } from "ng-recaptcha";

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
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';
import { RedirectionComponent } from './redirection/redirection.component';
import { ViewRolesComponent } from './role/view-roles/view-roles.component';
import { CommandeComponent } from './commande/commande/commande.component';
import { CartComponent } from './cart/cart.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { SubredditSideBarComponent } from './shared/subreddit-side-bar/subreddit-side-bar.component';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CreateSubredditFrontComponent } from './subreddit/create-subreddit-front/create-subreddit-front.component';
import { CreatePostFrontComponent } from './post/create-post-front/create-post-front.component';
import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';
import { ViewPostFrontComponent } from './post/view-post-front/view-post-front.component';
import { ViewSubcommentsComponent } from './post/view-subcomments/view-subcomments.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { MycartComponent } from './cart/mycart/mycart.component';


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
    UpdateprofilComponent,
         RedirectionComponent,
         ViewRolesComponent,
         CommandeComponent,
         CartComponent,
         PostTileComponent,
         SideBarComponent,
         SubredditSideBarComponent,
         VoteButtonComponent,
         HomeComponent,
         CreateSubredditFrontComponent,
         CreatePostFrontComponent,
         ListSubredditsComponent,
         ViewPostFrontComponent,
         ViewSubcommentsComponent,
         CartViewComponent,
         MycartComponent,
         
         
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    EditorModule
  ],
  providers: [UserService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
