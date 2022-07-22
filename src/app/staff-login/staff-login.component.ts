import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  user:any;
  token:any;
  errorMsg:any;

  constructor(private staffService:StaffService, private router:Router) { }

  ngOnInit(): void {
  }

  dologin(form:any){
    //this.isLoggedIn = true;
    this.staffService.token(form).subscribe(res=> {
      console.log("the token received is "+res)

     // let token = JSON.stringify(res);
      this.token = res;
      console.log("the token received is "+this.token.jwt)
      this.staffService.loginStaff(this.token.jwt);

      this.router.navigate([('staff')])

    }, error => this.errorMsg = error.error.message)
    
  }

}
