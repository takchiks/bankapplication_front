import { StaffService } from './../staff.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  accountNumber:any
  Beneficiary:any
  constructor(private router:Router, private staffservice:StaffService) { }


  ngOnInit(): void {
  }

    transfer(form:any){
    alert("values are "+ form.FromAccountNumber+","+ form.ToAccountNumber+",..")
    this.staffservice.transfer(form).subscribe(res=>{
  
    })
    }
  
    ApproveBeneficiary(accountNumber:any){
  
      alert("inside approve beneficary page"+accountNumber)
  
      this.router.navigate([('/approve-beneficary/'+accountNumber)])
    }

    //aproveBeneficiary(accountNumber:any){
  
      //alert("inside approve beneficary page"+accountNumber);
     
        // this.router.navigate([('/approve-beneficary/'+accountNumber)])
   // }
}

  


