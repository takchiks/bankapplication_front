import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient, private userService:CustomerService) { }

  ngOnInit(): void {
  }


  register(form:any) {
    alert("inside register() "+form.fullName+", "+form.userName+", "+form.passWord+", "+form.phoneNumber+", "+form.secret_question+", "+form.secret_answer);

    this.userService.register(form).subscribe(res=>{
      
      this.router.navigate([('/login')])
    })
  }
}
