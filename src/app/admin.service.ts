import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: string = "http://localhost:8080/";
  ben: any;
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  requestOptions = { headers: this.header };

  constructor(private http: HttpClient, private router: Router) { }

  /* errorHandler(error: HttpErrorResponse){
    return throwError(() => error.message || "Server Error");
  } */

  createStaff(staffbody:any){
    return this.http.post(`${this.baseUrl}` + "api/admin/staff", staffbody, this.requestOptions);
  }
  enableStaff(enableBody:any){
    return this.http.put(`${this.baseUrl}` + "api/admin/staff", enableBody, this.requestOptions);

  }

}
