import { Component, OnInit } from '@angular/core';
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
  constructor(private service:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  dologin(form:any){
    alert("inside do login")
    //this.isLoggedIn = true;
    this.service.token(form).subscribe(res=> {
      alert("the token received is "+res)

     // let token = JSON.stringify(res);
      this.token = res;
      alert("the token received is "+this.token.jwt)
      this.service.loginUser(this.token.jwt);

      this.router.navigate([('')]);

      /*this.service.getUser(form.userName).subscribe(res=>{
        this.user = res;
        if (form.password == this.user.password){
          this.router.navigate([("/welcome/"+form.username)]);
        } else {
          alert("Please check your details and try again");
        }
      })*/

    })
  }

  goStaffLogin(){
    this.router.navigate([('staff_login')])
  }

}
