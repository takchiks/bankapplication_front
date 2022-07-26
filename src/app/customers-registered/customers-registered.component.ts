import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-customers-registered',
  templateUrl: './customers-registered.component.html',
  styleUrls: ['./customers-registered.component.css']
})
export class CustomersRegisteredComponent implements OnInit {
  
  data:any;
  customers:any 
  customer:any
  displayedColumns=["userId","fullName","userName","role","status"]

  constructor( private staffService: StaffService) { }

  ngOnInit(): void {
    this.staffService.getAllCustomers()
      .subscribe(data => this.customers = data)
  }

  changeStatus(customer:any){
    if(customer.status=="ENABLE"){
      customer.status = "DISABLE"
    }else{
      customer.status = "ENABLE"
    }
  }
  enableCustomer(updateCustomer:any){
    console.log();
    this.changeStatus(updateCustomer);
    if(updateCustomer.status == 'ENABLE'){
      updateCustomer.status='DISABLE'
    this.staffService.enableCustomer(new CustomerRequest(updateCustomer.userId,updateCustomer.status))
      .subscribe(data => this.customer = data)
    }else{
      updateCustomer.status='ENABLE'
      this.staffService.enableCustomer(updateCustomer).subscribe(data=>{
        this.data=data
      console.log(this.data.status)
      })

    }
  }

}
class CustomerRequest{
  constructor(
    private customerId: any,
    private status:any
  ){ }
}