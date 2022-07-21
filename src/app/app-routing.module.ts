import { ApproveBeneficaryComponent } from './approve-beneficary/approve-beneficary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//{
 // path: "/approve-beneficary/+accountNumber",
 // component:ApproveBeneficaryComponent
//}

import { LoginComponent } from './login/login.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';


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
    path:"staff_login",
    component: StaffLoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

