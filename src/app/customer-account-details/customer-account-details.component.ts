import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-customer-account-details',
  templateUrl: './customer-account-details.component.html',
  styleUrls: ['./customer-account-details.component.css']
})
export class CustomerAccountDetailsComponent implements OnInit {

  customerAccount: any
  accountNumber: any

  constructor(
    private staffService: StaffService
  ) { }

  ngOnInit(): void {
  }

  accountDetails(form:any){
    alert()
    this.staffService.getCustomerAccount(form).subscribe(data => 
      {this.customerAccount = data 
        console.log(this.customerAccount.accountNumber) })
  }
  accountTransaction(form:any){
    alert("showing account transaction")
    this.staffService.getAccountTransaction(form).subscribe(res=>{
      this.accountNumber = res;

    })
  }
}
