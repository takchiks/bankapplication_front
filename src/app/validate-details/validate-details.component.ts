import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-validate-details',
  templateUrl: './validate-details.component.html',
  styleUrls: ['./validate-details.component.css']
})
export class ValidateDetailsComponent implements OnInit {
  customer:any;
  constructor(private service:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }

  validateDetails(form:any){
    this.service.validateDetails(form).subscribe(res=>{
      //console.log(res);
      this.customer=res;
      console.log(this.customer);
      this.service.setUserNameforForgotPassword(form.userName);
      // alert(form.userName);
      // if(this.customer ==="Details Validated"){
      if(this.customer.userName === form.userName){
        this.router.navigate([('/forgot-password')])
      }
      else{
        console.log("Sorry, your username, question and/or answer mismatched.")
      }
    });

  }

}
