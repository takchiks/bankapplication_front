import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl:string = "http://localhost:9090/";
  ben:any;
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  requestOptions = { headers: this.header };

  constructor(private http:HttpClient, private router:Router) { }

  register(form:any){
    return this.http.post(`${this.baseUrl}`+"api/customer/register", form);
  }

  token(form:any){

    // this.router.navigate([('login/'+form.username+form.password)])
     //return this.http.post<{token:string}>(`${this.baseUrl}`+"api/customer/authenticate", form);
     return this.http.post(`${this.baseUrl}`+"api/customer/authenticate", form);
   }

   loginUser(token:any){
     //this.LoggedIn = true;
     localStorage.setItem('token', token);
   }

   public isLoggedIn(){
     var token = localStorage.getItem('token')

     if(token == null || token == ''|| token == undefined){
       return false;
     }
     else{
       return true;
     }
   }

   logout(){
     //this.LoggedIn = false
      localStorage.removeItem('token');
      return true;
   }

   createAccount(form:any){
    var customer = this.getUser();
    return this.http.post(`${this.baseUrl}`+"api/customer/"+customer+"/account", form);
  }

  getUser() {
    var token = this.getToken();
    return this.http.post(`${this.baseUrl}`+"api/customer/getuser/",token);
  }

  getToken(){
    var token = localStorage.getItem('token');
    return token;
  }
  getBeneficiary(){
    return this.http.get(`${this.baseUrl}`+"api/staff/beneficiary",this.requestOptions);


  }
}
