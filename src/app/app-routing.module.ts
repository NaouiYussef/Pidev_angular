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

const routes: Routes =  [  
{  path:'admin',
  component:TemplateAdminComponent,
  children:[
    
    {path: '', component:BodyAdminComponent},
    {path: 'userlist', component:UserComponent},
    
    
  ],data:{}

},{
  path:'',
  component: TemplateUserComponent,
  children:[
    {path: '', component:BodyUserComponent},
   
    {path: 'body', component:BodyUserComponent},
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent},


  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
