import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-admincreatestaff',
  templateUrl: './admincreatestaff.component.html',
  styleUrls: ['./admincreatestaff.component.css']
})
export class AdmincreatestaffComponent implements OnInit {
  adminDetails:any;
  role:any;
  status:any;

  constructor(private adminService:AdminService, private customerService:CustomerService, private matsnackbar:MatSnackBar, private route:Router) { }

  ngOnInit(): void {
    this.role = new FormControl()
    this.status = new FormControl()


    this.adminDetails = new FormGroup({
      userName: new FormControl('', Validators.required),
      fullName: new FormControl('', Validators.required),
      passWord: new FormControl('', Validators.required),
      role: this.role,
      status: this.status
    })
  }
  createStaff(){
    var fullName = this.adminDetails.controls.fullName.value;
    var userName = this.adminDetails.controls.userName.value;
    var role = "STAFF"
    var status = "DISABLE"
    var passWord = this.adminDetails.controls.passWord.value
    console.log(new StaffPojo(fullName,userName,passWord,role,status))
    this.adminService.createStaff(new StaffPojo(fullName,userName,passWord,role,status)).subscribe(res=>{
      console.log(res)
      this.matsnackbar.open("Successfully created Staff","close")
      this.redirect("/createstaff")
    })

  }
  redirect(uri:string){
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.route.navigate([uri]));
 }

}

class StaffPojo{
  // userName:any;
  // fullName:any
  // passWord: any
  // role:any
  // status: any
  
  constructor(private fullName:any,private userName:any, private passWord:any, private role:any, private status:any){
    // this.userName = auserName;
    // this.fullName = afullName;
    // this.role=arole;
    // this.passWord=apassWord;
    // this.status=astatus;

  }}
