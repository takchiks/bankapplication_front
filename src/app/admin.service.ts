import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) { }

  createStaff(staffbody:any){
    return this.http.post(`${this.baseUrl}` + "api/admin/staff", staffbody, this.requestOptions);
  }
  
  enableStaff(enableBody:any){
    return this.http.put(`${this.baseUrl}` + "api/admin/staff", enableBody, this.requestOptions);

  }

}
