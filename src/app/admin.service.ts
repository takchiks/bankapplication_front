import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  baseUrl: string = "http://localhost:9090/";
  ben: any;
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  requestOptions = { headers: this.header };

  header2 = new HttpHeaders({
    'Content-Type': 'application/json'})

    requestOptions2 = { headers: this.header2 };

  constructor(private http:HttpClient, private router: Router) { }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => error.message || "Server Error");
  }


  register(form: any) {
    return this.http.post(`${this.baseUrl}` + "api/admin/register", form);
  }


  createStaff(form: any) {
    //var customer = this.getUser();
    return this.http.post(`${this.baseUrl}` + "api/admin/staff", form, this.requestOptions);
  }
  token(form: any) {

    // this.router.navigate([('login/'+form.username+form.password)])
    //return this.http.post<{token:string}>(`${this.baseUrl}`+"api/customer/authenticate", form);
    return this.http.post(`${this.baseUrl}` + "api/admin/authenticate", form, this.requestOptions2)
                    ;
  }

   loginUser(token:any){
     //this.LoggedIn = true;
     localStorage.setItem('token', token);
  
   }

  // loginUser(token: any) {
  //   //this.LoggedIn = true;
  //   localStorage.setItem('token', token);
  // }

  public isLoggedIn() {
    var token = localStorage.getItem('token')

    if (token == null || token == '' || token == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  getAllStaff(){
    return this.http.get(`${this.baseUrl}` + "api/admin/staff", this.requestOptions);
  }
  enableStaff(enableBody:any){
    return this.http.put(`${this.baseUrl}` + "api/admin/staff", enableBody, this.requestOptions);
  }
  createAccount(form: any, customerID: any) {
    //var customer = this.getUser();
    return this.http.post(`${this.baseUrl}` + "api/customer/" + customerID + "/account", form);
  }

  getUser() {
    console.log("inside get user")
    //var token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}` + "api/customer/getuser", new Tokenpojo(localStorage.getItem('token')));
  }

  getUserID(customer: any) {
    return this.http.get(`${this.baseUrl}` + "api/customer/getuserID", customer);
  }

  logout() {
    //this.LoggedIn = false
    localStorage.removeItem('token');
    return true;
  }

  // createAccount(form: any) {
  //   var customer = this.getUser();
  //   return this.http.post(`${this.baseUrl}` + "api/customer/" + customer + "/account", form, this.requestOptions);
  // }

  // getUser() {
  //   var token = this.getToken();
  //   return this.http.post(`${this.baseUrl}` + "api/customer/getuser/", token);
  // }

  getToken() {
    var token = localStorage.getItem('token');
    return token;
  }

  // getCustomer(id:any){
  //   //  const headers = new HttpHeaders({
  //   //   'Content-Type': 'application/json',
  //   //   'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   //   // 'Access-Control-Allow-Origin':'*'
  //   //  })
  //   return this.http.get(`${this.baseUrl}`+"api/customer/"+id);
  // }

  validateDetails(username: any, question: any, answer: any) {
    return this.http.get(`${this.baseUrl}` + "api/customer/" + username + "/forgot/" + question + "/" + answer, { responseType: 'text' });
  }

  doreset(form: any) {
    return this.http.post(`${this.baseUrl}` + "api/customer/forgotpassword", form);
  }


  getBeneficiary() {
    return this.http.get(`${this.baseUrl}` + "api/staff/customer", this.requestOptions);
  }

  addBeneficiary(customerId: any, beneficary: any) {
    return this.http.post(`${this.baseUrl}` + "api/customer/" + customerId + "/beneficiary", beneficary, this.requestOptions);
  }

  removeBeneficiary(customerId: any, beneficaryId: any) {
    return this.http.delete(`${this.baseUrl}` + "api/customer/" + customerId + "/beneficiary/" + beneficaryId, this.requestOptions);
  }
  transfer(ctransfer: any) {
    return this.http.put(`${this.baseUrl}` + "api/customer/transfer", ctransfer, this.requestOptions);
  }
  cupdate(customerId: any, customer: any) {
    return this.http.put(`${this.baseUrl}` + "api/customer/" + customerId, customer, this.requestOptions);
  }
  getCustomer(customerId: any) {
    return this.http.get(`${this.baseUrl}` + "api/customer/" + customerId, this.requestOptions);
  }

}

class Tokenpojo {
  token: any;

  constructor(private tokenc: any) {
    this.token = tokenc;
  }
}


function customerId(customerId: any, any: any) {
  throw new Error('Function not implemented.');
}

