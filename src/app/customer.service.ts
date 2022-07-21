import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl: string = "http://localhost:9090/";
  ben: any;
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  requestOptions = { headers: this.header };

  constructor(private http: HttpClient, private router: Router) { }

  register(form: any) {
    return this.http.post(`${this.baseUrl}` + "api/customer/register", form);
  }

  token(form: any) {

    // this.router.navigate([('login/'+form.username+form.password)])
    //return this.http.post<{token:string}>(`${this.baseUrl}`+"api/customer/authenticate", form);
    return this.http.post(`${this.baseUrl}` + "api/customer/authenticate", form);
  }

  loginUser(token: any) {
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

  createAccount(form: any) {
    var customer = this.getUser();
    return this.http.post(`${this.baseUrl}` + "api/customer/" + customer + "/account", form, this.requestOptions);
  }

  getUser() {
    var token = this.getToken();
    return this.http.post(`${this.baseUrl}` + "api/customer/getuser/", token);
  }

  getToken() {
    var token = localStorage.getItem('token');
    return token;
  }
  getBeneficiary() {
    return this.http.get(`${this.baseUrl}` + "api/staff/customer", this.requestOptions);
  }

  addBeneficiary(customerId: any, beneficary: any) {
    return this.http.post(`${this.baseUrl}` + "api/customer/" + customerId + "/beneficiary", beneficary, this.requestOptions);
  }
  
  removeBeneficiary(customerId: any, beneficaryId: any) {
    return this.http.delete(`${this.baseUrl}` + "api/customer/" + customerId + "/beneficiary/"+beneficaryId, this.requestOptions);
  }
  transfer(ctransfer: any) {
    return this.http.put(`${this.baseUrl}` + "api/customer/transfer",ctransfer, this.requestOptions);
  }
  cupdate(customerId: any, customer:any) {
    return this.http.put(`${this.baseUrl}` + "api/customer/"+customerId,customer, this.requestOptions);
  }
  getCustomer(customerId:any) {
    return this.http.get(`${this.baseUrl}`+ "api/customer/"+customerId, this.requestOptions);
  }


}
