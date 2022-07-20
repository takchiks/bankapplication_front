import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private messageSource = new BehaviorSubject('default message');

  public currentMessageSubscriber = this.messageSource.asObservable();

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  requestOptions = { "headers": this.header };

  baseUrl:string = "http://localhost:9090/";
  
  

  constructor(private http:HttpClient, private router:Router) {
    this.header.set("Authorization",`Bearer ${localStorage.getItem('token')}`); 
   
  }

    register(form:any){
      return this.http.post(`${this.baseUrl}`+"register", form);
    }

    getAllCustomer(){
      this.header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
      this.header.set('Authorization',`Bearer ${localStorage.getItem('token')}`)
      this.header.set('Access-Control-Allow-Origin', '*');
      this.requestOptions = { "headers": this.header };
      console.log(this.requestOptions)
      return this.http.get(`${this.baseUrl}`+"api/staff/beneficiary", this.requestOptions);
    }



    // login(form:any){

    //   this.router.navigate([('login/'+form.username+form.password)])
    //   //return this.http.post(`${this.baseUrl}`+"login", form, {responseType: 'text'});
    // }

   token(form:any){
    // localStorage.setItem('username',form.username)
    return this.http.post(`${this.baseUrl}`+"api/staff/authenticate", form,{responseType:'json'});
   }
   loginUser(token:any){
    localStorage.setItem('token',token);
   }
   isLoggedIn(){
    var token = localStorage.getItem('token')
    console.log("maf  :"+token)
    if(token==null||token==''|| token== undefined){
      return false;
    }else{
      return true;
    }
   }
   logout(){
     localStorage.removeItem('token')
     localStorage.removeItem('username')
     this.isLoggedIn()
   }
 

notify(message: any) {
  this.messageSource.next(this.isLoggedIn().toString())
}

}
