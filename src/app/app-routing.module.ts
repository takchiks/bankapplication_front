
import { Component, NgModule } from '@angular/core';
import { ByAccountNumberComponent } from './by-account-number/by-account-number.component';
import { StaffComponent } from './staff/staff.component';
import { StaffService } from './staff.service';
import { ApproveBeneficaryComponent } from './approve-beneficary/approve-beneficary.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ValidateDetailsComponent } from './validate-details/validate-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { StaffLoginComponent } from './staff-login/staff-login.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { CustomertransferComponent } from './customertransfer/customertransfer.component';
import { RemovebeneficiaryComponent } from './removebeneficiary/removebeneficiary.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { CustomerviewaccountComponent } from './customerviewaccount/customerviewaccount.component';
import { AdmincreatestaffComponent } from './admincreatestaff/admincreatestaff.component';
import { AdminapprovestaffComponent } from './adminapprovestaff/adminapprovestaff.component';
import { CustomerAccountDetailsComponent } from './customer-account-details/customer-account-details.component';
import { CustomerAccountApprovalComponent } from './customer-account-approval/customer-account-approval.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



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
  },{

  
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
  // {
  //   path: "/approve-beneficary/:accountNumber",
  //   component: ApproveBeneficaryComponent
  // },
  {
    path: "ctransfer",
    component: CustomertransferComponent
  },  
  {
    path: "approve-beneficary",
    component: ApproveBeneficaryComponent
  },
  {
    path: "addbeneficiary",
    component: AddbeneficiaryComponent
  }, 
  {
    path: "removebeneficiary",
    component: RemovebeneficiaryComponent
  },
  {
    path: "cupdate",
    component: CustomerupdateComponent
  }, 
  {
    path: "cview",
    component: CustomerviewaccountComponent
  }, 
  {
    path: "createstaff",
    component: AdmincreatestaffComponent
  }, 
  {
    path: "approvestaff",
    component: AdminapprovestaffComponent
  },{
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
  {
    path: "adminlogin",
    component: AdminloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

