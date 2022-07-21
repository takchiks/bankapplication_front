import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-customer-account-approval',
  templateUrl: './customer-account-approval.component.html',
  styleUrls: ['./customer-account-approval.component.css']
})
export class CustomerAccountApprovalComponent implements OnInit {

  accounts: any
  account: any
  constructor(
    private staffService: StaffService
  ) { }

  ngOnInit(): void {
    this.staffService.getAccountsForApproval()
      .subscribe(data => this.accounts = data )
  }

  approveAccount(account:any){
    alert("in approve account")
    this.staffService.approveCustomerAccount(account)
      .subscribe(data => this.account = data )
  }
}
