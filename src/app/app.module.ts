import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ApproveBeneficaryComponent } from './approve-beneficary/approve-beneficary.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ValidateDetailsComponent } from './validate-details/validate-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { StaffComponent } from './staff/staff.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { RemovebeneficiaryComponent } from './removebeneficiary/removebeneficiary.component';
import { CustomertransferComponent } from './customertransfer/customertransfer.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { CustomerviewaccountComponent } from './customerviewaccount/customerviewaccount.component';
import { AdmincreatestaffComponent } from './admincreatestaff/admincreatestaff.component';
import { AdminapprovestaffComponent } from './adminapprovestaff/adminapprovestaff.component';
import { CustomerAccountDetailsComponent } from './customer-account-details/customer-account-details.component';
import { CustomerAccountApprovalComponent } from './customer-account-approval/customer-account-approval.component';
import { CustomersRegisteredComponent } from './customers-registered/customers-registered.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table'  
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { FooterComponent } from './footer/footer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApproveBeneficaryComponent,
    RegisterCustomerComponent,
    CustomerDashboardComponent,
    HeaderComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    ValidateDetailsComponent,
    StaffComponent,
    StaffLoginComponent,
    AddbeneficiaryComponent,
    RemovebeneficiaryComponent,
    CustomertransferComponent,
    CustomerupdateComponent,
    CustomerviewaccountComponent,
    AdmincreatestaffComponent,
    AdminapprovestaffComponent,
    CustomerAccountDetailsComponent,
    CustomerAccountApprovalComponent,
    CustomersRegisteredComponent,
    AdminloginComponent,
    AccountStatementComponent,
    FooterComponent,
    StaffheaderComponent,
    ApproveTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
