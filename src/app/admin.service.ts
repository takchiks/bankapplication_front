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


  constructor(private http:HttpClient, private router: Router) { }

  /* errorHandler(error: HttpErrorResponse){
    return throwError(() => error.message || "Server Error");
  } */

  register(form: any) {
    return this.http.post(`${this.baseUrl}` + "api/admin/register", form);
  }

  token(form: any) {

    // this.router.navigate([('login/'+form.username+form.password)])
    //return this.http.post<{token:string}>(`${this.baseUrl}`+"api/customer/authenticate", form);
    return this.http.post(`${this.baseUrl}` + "api/admin/authenticate", form);
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


  createStaff(staffbody:any){
    return this.http.post(`${this.baseUrl}` + "api/admin/staff", staffbody, this.requestOptions);
  }
  getAllStaff(){
    return this.http.get(`${this.baseUrl}` + "api/admin/staff", this.requestOptions);
  }
  enableStaff(enableBody:any){
    return this.http.put(`${this.baseUrl}` + "api/admin/staff", enableBody, this.requestOptions);

  }

}
