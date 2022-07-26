import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminapprovestaff',
  templateUrl: './adminapprovestaff.component.html',
  styleUrls: ['./adminapprovestaff.component.css']
})
export class AdminapprovestaffComponent implements OnInit {
  staff:any;
  res:any;
  // dataSource = this.staff
  // displayedColumns=["status","fullName"]
  displayedColumns=["userId","fullName","userName","role","status"]

  constructor(private adminService:AdminService, private matSnackbar:MatSnackBar, private route:Router) { }

  ngOnInit(): void {
    
    this.adminService.getAllStaff().subscribe(res=>{

      this.staff = res;
      console.log(this.staff[0].fullName)
    })
    console.log(this.staff)
     
  } 
  enableStaff(updateStaff:any){
    if(updateStaff.status == 'ENABLE'){
      updateStaff.status='DISABLE'
      this.adminService.enableStaff(updateStaff).subscribe(res=>{
        this.res=res

      this.matSnackbar.open("Successfully "+updateStaff.status,"close", {
        duration: 2000,
        // here specify the position
        verticalPosition: 'top'
      });
      console.log(this.res.status)

      })
    }else{
      updateStaff.status='ENABLE'
      this.adminService.enableStaff(updateStaff).subscribe(res=>{
        this.res=res
        this.matSnackbar.open("Successfully "+updateStaff.status,"close", {
          duration: 2000,
          // here specify the position
          verticalPosition: 'top'
        });
      console.log(this.res.status)
      })

    }
  }

  gotoapprovestaff(){
    // this.redirect("/approvestaff")
    window.location.replace("/approvestaff")
  }
  redirect(uri:string){
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.route.navigate([uri]));
 }


}
