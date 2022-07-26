import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  errorMsg:any;
  displayedColumns=["date","reference","amount","paymentType"]

  constructor(private service:CustomerService,private matsnackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(res=>{
      this.customer = res;
      this.service.getAllAccounts(this.customer.userId).subscribe(res=>{
        this.customerAccountNumbers=res;
        
      },
      error=>
      this.errorMsg = error.error.message)
    })
      
  }


  accountDetails(form:any){
    console.log()
    this.service.getCustomerAccount(form).subscribe(data => 
      {this.customerAccount = data 
        console.log(this.customerAccount.accountNumber) })
  }

  accountTransaction(form:any){
    console.log("showing account transaction")
    this.service.getAccountTransaction(form.accountNumber).subscribe(res=>{
      this.accountNumber = res;
      //this.matsnackbar.open("Successfully Transferred Amount","DISMISS")

    })
    
  }

}
