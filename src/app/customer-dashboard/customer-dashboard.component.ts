import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  customer:any;
  ben:any;
  accounts:any;

  constructor(private service:CustomerService, private router:Router) { }

  ngOnInit(): void {
    // this.service.getCustomer(9).subscribe(res=> {
    //   this.customer = res;
  //   this.service.getBeneficiary().subscribe(res=>{
  //     this.ben = res

  //   });
  // this.router.navigate([('/create-account')])
  this.service.getUser().subscribe(res=>{
    this.customer = res;

  this.service.getAllAccounts(this.customer.userId).subscribe(res=>{
    this.accounts = res;
  })
})

}





}
