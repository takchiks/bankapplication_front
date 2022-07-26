
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
import { CustomersRegisteredComponent } from './customers-registered/customers-registered.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthGuard } from './auth.guard';



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
    component: LoginComponent
  },
  {
    path: "customerdashboard",
    component: CustomerDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"create-account",
    component:CreateAccountComponent
    // component: CustomerDashboardComponent
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
      component: ApproveBeneficaryComponent  ,
      canActivate:[AuthGuard]   
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
    component: CustomertransferComponent,
    canActivate:[AuthGuard]
  },  
  {
    path: "approve-beneficary",
    component: ApproveBeneficaryComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "addbeneficiary",
    component: AddbeneficiaryComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path: "removebeneficiary",
    component: RemovebeneficiaryComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "cupdate",
    component: CustomerupdateComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path: "cview",
    component: CustomerviewaccountComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path: "createstaff",
    component: AdmincreatestaffComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path: "approvestaff",
    component: AdminapprovestaffComponent,
    canActivate:[AuthGuard]
  },{
    path: "staff/account",
    component: CustomerAccountDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "staff/approve/account",
    component: CustomerAccountApprovalComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "staff/enable/customer",
    component: CustomersRegisteredComponent,
    canActivate:[AuthGuard]
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

