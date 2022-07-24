import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  customer:any;
  usernameForForgotPassword:any;
  constructor(public service:CustomerService, private router:Router) { }

  ngOnInit(): void {
    // this.service.getUserNameforForgotPassword().subscribe((res: any)=>{
    //   this.usernameForForgotPassword = res;
    //   alert(this.usernameForForgotPassword);
    // })
  }

  doreset(form:any){

    this.service.doreset(form).subscribe(res=>{
      this.customer = res;
      console.log(this.customer)
      //console.log("not valid")
      //if(this.customer == "Sorry your secret details are not matching"){
        //console.log("not valid");
      //}
      this.router.navigate([('/login')]);
    })
  }

}
