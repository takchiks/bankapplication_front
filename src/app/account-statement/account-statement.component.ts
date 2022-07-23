import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  customerAccount: any;
  accountNumber: any;
  customer:any;
  customerAccountNumbers:any;

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(res=>{
      this.customer = res;
      this.service.getAllAccounts(this.customer.userId).subscribe(res=>{
        this.customerAccountNumbers=res;
      })
    })
      
  }

  accountDetails(form:any){
    alert()
    this.service.getCustomerAccount(form).subscribe(data => 
      {this.customerAccount = data 
        console.log(this.customerAccount.accountNumber) })
  }

  accountTransaction(form:any){
    alert("showing account transaction")
    this.service.getAccountTransaction(form.accountNumber).subscribe(res=>{
      this.accountNumber = res;

    })
    
  }

}
