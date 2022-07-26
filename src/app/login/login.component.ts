import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  token:any;
  errorMsg:any;
  constructor(private service:CustomerService, private router:Router, private matSnackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  dologin(form:any){
    console.log("inside do login")
    //this.isLoggedIn = true;
    this.service.token(form).subscribe(res=> {
      console.log("the token received is "+res)

     // let token = JSON.stringify(res);
      this.token = res;
      console.log("the token received is "+this.token.jwt)
      this.service.loginUser(this.token.jwt);
      this.matSnackbar.open("Welcome "+form.username+"!!" ,"close", {
        duration: 3000,
        // here specify the position
        verticalPosition: 'top'
      });

      this.router.navigate([('customerdashboard')]);

    },error=>
    this.errorMsg = error.error.message)
  }

}
