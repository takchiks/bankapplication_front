import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-customers-registered',
  templateUrl: './customers-registered.component.html',
  styleUrls: ['./customers-registered.component.css']
})
export class CustomersRegisteredComponent implements OnInit {

  customers:any 
  customer:any

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
  enableCustomer(customer:any){
    alert();
    this.changeStatus(customer);
    this.staffService.enableCustomer(new CustomerRequest(customer.userId,customer.status))
      .subscribe(data => this.customer = data)
  }

}

class CustomerRequest{
  constructor(
    private customerId: any,
    private status:any
  ){ }
}