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
  constructor(private service:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  doreset(form:any){
    this.service.doreset(form).subscribe(res=>{
      this.customer = res;
      alert(this.customer)
      //alert("not valid")
      //if(this.customer == "Sorry your secret details are not matching"){
        //alert("not valid");
      //}
      this.router.navigate([('/login')]);
    })
  }

}
