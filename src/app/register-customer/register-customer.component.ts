import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient, private userService:CustomerService) { }

  ngOnInit(): void {
  }

  // registerForm = new FormGroup({
  //   userName: new FormControl('', Validators.required),
  //  fullName: new FormControl('', Validators.required),
  //    passWord: new FormControl('', Validators.required),
  //    confirmPassword: new FormControl('', Validators.required),
  //    phoneNumber: new FormControl('', Validators.required),
  //    secret_question: new FormControl('', Validators.required),
  //    secret_answer: new FormControl('', Validators.required),
  // })

  register(form:any) {
    console.log("inside register() "+form.fullName+", "+form.userName+", "+form.passWord+", "+form.phoneNumber+", "+form.secret_question+", "+form.secret_answer);

    this.userService.register(form).subscribe(res=>{
      
      this.router.navigate([('/login')])
    })
  }
}
