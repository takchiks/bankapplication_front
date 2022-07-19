import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  baseUrl:string = "http://localhost:8080/";
  constructor(private http:HttpClient, private router:Router) { }


  transfer(form:any){

    return this.http.put(`${this.baseUrl}`+"api/staff/transfer", form);

  }
  approveBeneficiary(id:any){
   
    return this.http.post(`${this.baseUrl}`+"api/staff/beneficiary", id)
  }
}
