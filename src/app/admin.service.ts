import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private messageSource = new BehaviorSubject('default message');
  public currentMessageSubscriber = this.messageSource.asObservable();

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  requestOptions = { headers: this.header };

  baseUrl:string = "http://localhost:9090/";
  
  

  constructor(private http:HttpClient, private router:Router) {
    this.header.set("Authorization",`Bearer ${localStorage.getItem('token')}`); 
   
  }

    register(form:any){
      return this.http.post(`${this.baseUrl}`+"register", form);
    }

    getAllCustomer(){
      
      return this.http.get(`${this.baseUrl}`+"api/staff/beneficiary", this.requestOptions);
    }




  transfer(form:any){

    return this.http.put(`${this.baseUrl}`+"api/staff/transfer", form, this.requestOptions);

  }
  approveBeneficiary(id:any){
   
    return this.http.post(`${this.baseUrl}`+"api/staff/beneficiary", id)
  }

}
