import { StaffComponent } from './staff/staff.component';
import { StaffService } from './staff.service';
import { ApproveBeneficaryComponent } from './approve-beneficary/approve-beneficary.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//{
 // path: "/approve-beneficary/+accountNumber",
 // component:ApproveBeneficaryComponent
//}

import { LoginComponent } from './login/login.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';


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
      path:"approve-beneficary/:accountNumber",
      component: ApproveBeneficaryComponent     
  },
  {
    path: "staff",
    component:StaffComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

