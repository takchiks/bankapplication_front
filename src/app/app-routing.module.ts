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
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { CustomertransferComponent } from './customertransfer/customertransfer.component';
import { RemovebeneficiaryComponent } from './removebeneficiary/removebeneficiary.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { CustomerviewaccountComponent } from './customerviewaccount/customerviewaccount.component';
import { AdmincreatestaffComponent } from './admincreatestaff/admincreatestaff.component';
import { AdminapprovestaffComponent } from './adminapprovestaff/adminapprovestaff.component';


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
  // {
  //   path: "/approve-beneficary/:accountNumber",
  //   component: ApproveBeneficaryComponent
  // },
  {
    path: "ctransfer",
    component: CustomertransferComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

