import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashpageComponent } from './dashpage/dashpage.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path: "sign",
    component:SignupComponent
  },
  {
    path:"dash",
    component:DashpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
