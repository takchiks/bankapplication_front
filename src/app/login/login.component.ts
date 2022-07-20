import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  jwtJson:any;
  

  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  dologin(form:any){
    console.log("The form is holding "+form.username+", "+ form.password)
    
    this.service.token(form).subscribe(res=>{
      this.jwtJson =res 
      localStorage.setItem('username',form.username)
      localStorage.setItem('token',this.jwtJson.jwt)

      console.log("The token is holding "+this.jwtJson.jwt)
      console.log("The token is holding "+this.jwtJson)
      let token:string = this.jwtJson.jwt;
      this.service.loginUser(token)
      localStorage.setItem("token",token)
      this.service.notify({isRefresh:true});
      
      this.router.navigate([('/')])


    })
  }

}
