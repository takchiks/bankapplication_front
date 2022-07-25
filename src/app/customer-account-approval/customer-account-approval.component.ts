import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-customer-account-approval',
  templateUrl: './customer-account-approval.component.html',
  styleUrls: ['./customer-account-approval.component.css']
})
export class CustomerAccountApprovalComponent implements OnInit {

  accounts: any
  account: any
  displayedColumns = ["accountNumber", "accountType", "accountBalance", "dateOfCreation", "status", "approve"]

  constructor(
    private router: Router,
    private staffService: StaffService
  ) { }

  ngOnInit(): void {
    this.staffService.getAccountsForApproval()
      .subscribe(data => this.accounts = data)
  }

  approveAccount(account: any) {
    console.log("in approve account")
    this.staffService.approveCustomerAccount(account)
      .subscribe(data => this.account = data);
    this.redirect('staff/approve/account');
  }

  redirect(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}
