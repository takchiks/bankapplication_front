import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user:any;
  token:any;
  constructor(private service:AdminService, private router:Router) { }


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

      this.router.navigate([('/createstaff')]);

      /*this.service.getUser(form.userName).subscribe(res=>{
        this.user = res;
        if (form.password == this.user.password){
          this.router.navigate([("/welcome/"+form.username)]);
        } else {
          console.log("Please check your details and try again");
        }
      })*/

    })
  }



}