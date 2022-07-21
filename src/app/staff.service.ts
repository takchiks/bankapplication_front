import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  baseUrl:string = "http://localhost:8080/";
  constructor(private http:HttpClient, private router:Router) { }


  transfer(form: any) {

    return this.http.put(`${this.baseUrl}` + "api/staff/transfer", form);

  }
  byAccountNumber(form:any){
    return this.http.get(`${this.baseUrl}` + "api/staff/transfer", form);
  }

  getApprovedBeneficiary(){
    return this.http.get(`${this.baseUrl}`+"api/staff/beneficiary")
  }
  
  
  token(form: any) {
    return this.http.post(`${this.baseUrl}` + "api/staff/authenticate", form);
  }

  loginStaff(token: any) {
    //this.LoggedIn = true;
    localStorage.setItem('token', token);
  }

  public isLoggedIn() {
    var token = localStorage.getItem('token')

    if (token == null || token == '' || token == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  logout() {
    //this.LoggedIn = false
    localStorage.removeItem('token');
    return true;
  }

  getStaff() {
    var token = this.getToken();
    return this.http.post(`${this.baseUrl}` + "api/staff/getuser/", token);
  }

  getToken() {
    var token = localStorage.getItem('token');
    return token;
  }
}
