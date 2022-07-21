import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
ben:any;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getBeneficiary().subscribe(res=>{
      this.ben = res

    });
  }

}
