import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl:string = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

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

   createAccount(form:any, customerID:any){
    //var customer = this.getUser();
    return this.http.post(`${this.baseUrl}`+"api/customer/"+customerID+"/account", form);
  }

  getUser() {
    alert("inside get user")
    //var token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}`+"api/customer/getuser",new Tokenpojo(localStorage.getItem('token')));
  }

  getUserID(customer:any){
    return this.http.get(`${this.baseUrl}`+"api/customer/getuserID",customer);
  }

  getToken(){
    var token = localStorage.getItem('token');
    return token;
  }

  getCustomer(id:any){
    //  const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    //   // 'Access-Control-Allow-Origin':'*'
    //  })
    return this.http.get(`${this.baseUrl}`+"api/customer/"+id);
  }

  validateDetails(username:any, question:any, answer:any){
    return this.http.get(`${this.baseUrl}`+"api/customer/"+username+"/forgot/"+question+"/"+answer,{responseType:'text'});
  }

  doreset(form:any){
    return this.http.post(`${this.baseUrl}`+"api/customer/forgotpassword", form);
  }
}

class Tokenpojo{
  token:any;
  
  constructor(private tokenc:any){
    this.token = tokenc;
  }
}
