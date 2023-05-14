import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from 'src/app/signin/signin.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { BodyUserComponent } from './body-user/body-user.component';
import { UserComponent } from 'src/app/user/user.component';

import { AppComponent } from './app.component';
import { TemplateUserComponent}  from 'src/app/template-user/template-user.component'
import { TemplateAdminComponent } from './template-admin/template-admin.component';
import { BodyAdminComponent } from './body-admin/body-admin.component';
import {CategoryComponent} from "./category/category/category.component";
import {CategoryFormComponent} from "./category/category-form/category-form.component";
import {CategoryUpdateComponent} from "./category/category-update/category-update.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductUpdateComponent} from "./Product/product-update/product-update.component";
import {ProductFormComponent} from "./Product/product-form/product-form.component";
import {ProductComponent} from "./Product/product/product.component";

import { CartComponent } from './cart/cart.component';


import { PostComponent } from './post/view-post/post.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { ViewSubredditComponent } from './subreddit/view-subreddit/view-subreddit.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { UpdateSubredditComponent } from './subreddit/update-subreddit/update-subreddit.component';
import { ViewCommentComponent } from './comment/view-comment/view-comment.component';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';
import {ProductFrontComponent} from "./Product/product-front/product-front.component";
import {ProductDetailsFrontComponent} from "./product-details/product-details-front/product-details-front.component";
import { ChangemdpComponent } from './changemdp/changemdp.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';
import { RedirectionComponent } from './redirection/redirection.component';
import { ViewRolesComponent } from './role/view-roles/view-roles.component';
import { RoleComponent } from './role/role.component';
import {CommandeComponent} from "./commande/commande/commande.component";
import { HomeComponent } from './home/home.component';
import { CreatePostFrontComponent } from './post/create-post-front/create-post-front.component';
import { CreateSubredditFrontComponent } from './subreddit/create-subreddit-front/create-subreddit-front.component';
import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';
import { ViewPostFrontComponent } from './post/view-post-front/view-post-front.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { MycartComponent } from './cart/mycart/mycart.component';
import { ValidationCommandeComponent } from './validation-commande/validation-commande.component';
import { CommandeFrontComponent } from './commande/commande-front/commande-front.component';
import { SlaBackComponent } from './sla/sla-back/sla-back.component';
import { SlaComponent } from './sla/sla.component';
import { ChatBComponent } from './Chat/chat-b/chat-b.component';
import { FeedbackBComponent } from './Feedback/feedback-b/feedback-b.component';
import { FeedbackBackVComponent } from './Feedback/feedback-back-v/feedback-back-v.component';
import { ChatFComponent } from './Chat/chat-f/chat-f.component';
import { FeedbackFComponent } from './Feedback/feedback-f/feedback-f.component';
import { FeedbackUsComponent } from './Feedback/feedback-us/feedback-us.component';

const routes: Routes =  [
{  path:'admin',
  component:TemplateAdminComponent,
  children:[

    {path: '', component:BodyAdminComponent},

    {path: 'userlist', component:UserComponent},
    {path: 'category', component:CategoryComponent},
    { path: 'new-category', component: CategoryFormComponent },
    { path: 'update-category', component: CategoryUpdateComponent },
    { path: 'product', component: ProductComponent },
    { path: 'new-product', component: ProductFormComponent },
    { path: 'update-product', component: ProductUpdateComponent },
    { path: 'details', component: ProductDetailsComponent },
    { path: 'app-commande/productsoflist/:commande_id', component: CartComponent},
    { path: 'post', component: PostComponent },
    { path: 'create-post', component: CreatePostComponent},
    { path: 'edit-post/:id', component: EditPostComponent},
    { path: 'view-subreddit', component: ViewSubredditComponent},
    { path: 'create-subreddit', component: CreateSubredditComponent},
    { path: 'update-subreddit/:id', component: UpdateSubredditComponent},
    { path: 'view-comment', component:ViewCommentComponent},
    { path: 'create-comment', component: CreateCommentComponent},
    { path: 'rolelist', component:ViewRolesComponent},
    { path: 'createRole', component:RoleComponent},
    { path: 'app-commande', component:CommandeComponent},
    { path: 'sla', component: SlaBackComponent},
    { path: 'chatb', component:ChatBComponent},
    { path: 'feedbackb', component:FeedbackBComponent},
    { path: 'feedbackb/feedbackbV/:id', component:FeedbackBackVComponent}


  ],data:{}

},{
  path:'',
  component: TemplateUserComponent,
  children:[
    {path: '', component:BodyUserComponent},

    {path: 'body', component:BodyUserComponent},
    {path: 'redirection', component:RedirectionComponent},
{path:'signin',component:SigninComponent},
{path:'forgetPAssword',component:ChangemdpComponent},
{path:'signup',component:SignupComponent},
{ path: 'updatepPassword/:token/:email', component: UpdatepasswordComponent },
    { path: 'app-product-front', component: ProductFrontComponent},
    { path: 'app-product-details-front', component: ProductDetailsFrontComponent},
    { path: 'update', component: UpdateprofilComponent},
    { path: 'forum', component: HomeComponent },
    { path: 'create-post-front', component: CreatePostFrontComponent},
    { path: 'create-subreddit-front', component: CreateSubredditFrontComponent},
    { path: 'list-subreddits', component: ListSubredditsComponent },  
    { path: 'view-post-front/:id', component: ViewPostFrontComponent },
    { path: 'app-product-front/view-cart', component: MycartComponent},
    { path:'view-my-cart', component:CartViewComponent},
    { path: 'create-sla', component: SlaComponent},
    { path: 'validation/:id', component:ValidationCommandeComponent},
    { path: 'listeProduit/:id', component:CommandeFrontComponent},
    { path: 'chatf', component:ChatFComponent},
    { path: 'feedbackf/:id', component:FeedbackFComponent},
    { path: 'feedbackUs', component:FeedbackUsComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
