import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private messageSource = new BehaviorSubject('default message');
  public currentMessageSubscriber = this.messageSource.asObservable();

  baseUrl:string = "http://localhost:9090/";
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });

  requestOptions = { headers: this.header };
  
  constructor(private http:HttpClient) { }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => error.message || "Server Error");
  }

  transfer(form: any) {

    return this.http.put(`${this.baseUrl}` + "api/staff/transfer", form,this.requestOptions);

  }
  approveBeneficaryAccount(beneficary:any){
    return this.http.put(`${this.baseUrl}`+"api/staff/beneficiary", beneficary, this.requestOptions) 
  }
  
  notify(message: any) {
    this.messageSource.next("Notify")
  }
  getAccountTransaction(accountNumber:any){
    return this.http.get(`${this.baseUrl}`+"api/staff/"+accountNumber+"/transaction2",this.requestOptions)
  }
  getAccountTransaction1(accountNumber:any){
    return this.http.get(`${this.baseUrl}`+"api/staff/account/"+ accountNumber.accountNumber,this.requestOptions)
  }
  byAccountNumber(form:any){
    return this.http.get(`${this.baseUrl}` + "api/staff/transfer", form);
  }

  getApprovedBeneficiary(){
    return this.http.get(`${this.baseUrl}`+"api/staff/beneficiary",this.requestOptions)
  }
  
  approveCustomerAccount(account:any){
    return this.http.put(`${this.baseUrl}`+"api/staff/accounts/approve", account, this.requestOptions)
  }
  
  getAccountsForApproval(){
    return this.http.get(`${this.baseUrl}`+"api/staff/accounts/approve", this.requestOptions)
  }

  getCustomerAccount(accountNumber:any){
    return this.http.get(`${this.baseUrl}`+"api/staff/account/"+ accountNumber.accountNumber,this.requestOptions)
  }

  getAllCustomers(){
    return this.http.get(`${this.baseUrl}`+"api/staff/customer",this.requestOptions)
  }

  enableCustomer(customer:any){
    return this.http.put(`${this.baseUrl}`+"api/staff/customer", customer, this.requestOptions)
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
    return this.http.post(`${this.baseUrl}` + "api/staff/getuser/", token, this.requestOptions)
                    .pipe(catchError(this.errorHandler))
  }

  getToken() {
    var token = localStorage.getItem('token');
    return token;
  }

}
