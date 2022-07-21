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
    alert("values are "+ form.fromAcc+","+ form.toAcc+" "+form.amount+" "+form.reason)
    this.staffservice.transfer(form).subscribe(res=>{
  
    })
    }
  
    ApproveBeneficiary(){
  
      alert("inside approve beneficary page")
  
      this.router.navigate([('/approve-beneficary')])
    }
    ByAccountNumber(){
      alert("inside by account number component")
      this.router.navigate([('/by-account-number')])
    }

    //aproveBeneficiary(accountNumber:any){
  
      //alert("inside approve beneficary page"+accountNumber);
     
        // this.router.navigate([('/approve-beneficary/'+accountNumber)])
   // }
}

  


