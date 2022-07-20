import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ApproveBeneficaryComponent } from './approve-beneficary/approve-beneficary.component';
@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ApproveBeneficaryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    FormsModule,
    MatInputModule,

    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
