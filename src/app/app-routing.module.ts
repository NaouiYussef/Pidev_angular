import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from 'src/app/signin/signin.component';
import { SignupComponent } from 'src/app/signup/signup.component';

import { UserComponent } from 'src/app/user/user.component';

import { AppComponent } from './app.component';


const routes: Routes =  [  
{  path:'',
  component:AppComponent,
  children:[
    {path: 'all', component:UserComponent}
    
  ],data:{roles:['[admin']}

},{
  path:'',
  component: AppComponent,
  children:[
    
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
