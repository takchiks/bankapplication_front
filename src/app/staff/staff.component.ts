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
    console.log("values are "+ form.fromAcc+","+ form.toAcc+" "+form.amount+" "+form.reason)
    this.staffservice.transfer(form).subscribe(res=>{
  
    })
    }
  
    ApproveBeneficiary(){
  
      console.log("inside approve beneficary page")
  
      this.router.navigate([('/approve-beneficary')])
    }
    ByAccountNumber(){
      console.log("inside by account number component")
      this.router.navigate([('/by-account-number')])
    }

    goApproveAccounts(){
      console.log("inside approve customer page")
  
      this.router.navigate([('/staff/approve/account')])
    }

    goToAccounts(){
      console.log("inside get customer page")

      this.router.navigate([('/staff/account')])
    }

    goEnableCustomer(){
      this.router.navigate([('staff/enable/customer')])
    }
}

  


