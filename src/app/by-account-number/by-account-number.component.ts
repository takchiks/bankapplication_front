import { StaffService } from './../staff.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-account-number',
  templateUrl: './by-account-number.component.html',
  styleUrls: ['./by-account-number.component.css']
})
export class ByAccountNumberComponent implements OnInit {

  constructor(private router:Router, private staffservice:StaffService) { }

  ngOnInit(): void {
   }

   byAccountNumber(form:any){
    console.log("values are "+ form.fromAcc)
    this.staffservice.byAccountNumber(form).subscribe(res=>{
  
    })
    }

}
