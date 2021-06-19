import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'forgot',
    component: ForgotComponent
  },
  {
    path:'registrasi',
    component: RegisterComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/first-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
