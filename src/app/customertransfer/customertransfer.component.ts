import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customertransfer',
  templateUrl: './customertransfer.component.html',
  styleUrls: ['./customertransfer.component.css']
})
export class CustomertransferComponent implements OnInit {
  customer:any;
  customerAccountNumbers:any;
  errorMsg:any;
  displayedColumns=["accountNumber","accountBalance","accountType"]

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(res=>{
      this.customer = res;
      this.service.getAllAccounts(this.customer.userId).subscribe(res=>{
        this.customerAccountNumbers=res;
      })
    })
  }


  transferAmount(form:any){
    alert("it came here");
    this.service.transfer(form).subscribe(res=>{
      alert(res);
      alert("Amount Transferred");
      this.errorMsg ="Amount is successfully transferred"
    },error=>
    this.errorMsg = error.error.message)
    
      
    
  }

}
