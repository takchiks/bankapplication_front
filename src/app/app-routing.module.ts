import { ByAccountNumberComponent } from './by-account-number/by-account-number.component';
import { StaffComponent } from './staff/staff.component';
import { StaffService } from './staff.service';
import { ApproveBeneficaryComponent } from './approve-beneficary/approve-beneficary.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './login/login.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { CustomerAccountDetailsComponent } from './customer-account-details/customer-account-details.component';
import { CustomerAccountApprovalComponent } from './customer-account-approval/customer-account-approval.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterCustomerComponent
  },
  {
    path: "",
    component: CustomerDashboardComponent
  },
  {
      path:"approve-beneficary/:accountNumber",
      component: ApproveBeneficaryComponent     
  },
  {
    path: "staff",
    component:StaffComponent
  },
  {
    path:"staff_login",
    component: StaffLoginComponent
  },
  {
    path: "approve-beneficary",
    component: ApproveBeneficaryComponent
  },
  {
    path: "by-account-number",
    component: ByAccountNumberComponent
   
  },
  {
    path: "staff",
    component: StaffComponent
  },
  {
    path: "staff/account",
    component: CustomerAccountDetailsComponent
  },
  {
    path: "staff/approve/account",
    component: CustomerAccountApprovalComponent
  },
  {
    path: "staff/enable/customer",
    component: CustomerAccountApprovalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

