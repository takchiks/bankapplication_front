import { StaffService } from './../staff.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-transfer',
  templateUrl: './approve-transfer.component.html',
  styleUrls: ['./approve-transfer.component.css']
})
export class ApproveTransferComponent implements OnInit {
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
