import { Component, OnInit } from '@angular/core';
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

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllStaff().subscribe(res=>{

      this.staff = res;
      console.log(this.staff[0].fullName)
    })
     
  } 
  enableStaff(updateStaff:any){
    if(updateStaff.status == 'ENABLE'){
      updateStaff.status='DISABLE'
      this.adminService.enableStaff(updateStaff).subscribe(res=>{
        this.res=res
      console.log(this.res.status)
      })
    }else{
      updateStaff.status='ENABLE'
      this.adminService.enableStaff(updateStaff).subscribe(res=>{
        this.res=res
      console.log(this.res.status)
      })

    }
  }

}
