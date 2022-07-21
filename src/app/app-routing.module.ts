import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ValidateDetailsComponent } from './validate-details/validate-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterCustomerComponent
  },
  {
    path:"",
    component: CustomerDashboardComponent
  },
  {
    path:"create-account",
    component:CreateAccountComponent
  },
  {
    path:"validate-details",
    component:ValidateDetailsComponent
  },
  {
    path:"forgot-password",
    component:ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
