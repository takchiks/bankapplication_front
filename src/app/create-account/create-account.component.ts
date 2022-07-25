import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  customer:any;
  errorMsg:any;
  constructor(private router:Router, private http:HttpClient, private userService:CustomerService) { }

  ngOnInit(): void {
  }
  

  createAccount(form:any){
    this.userService.getUser().subscribe(res=>{
      this.customer = res;
    
    //this.userService.getUserID(this.customer).subscribe(res1 =>{

    
    this.userService.createAccount(form,this.customer.userId).subscribe(res2=>{
      console.log("Account Created")
      this.errorMsg="Account is Successfully Created!!";
    //})
    })
  })
  }



}
