import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-removebeneficiary',
  templateUrl: './removebeneficiary.component.html',
  styleUrls: ['./removebeneficiary.component.css']
})
export class RemovebeneficiaryComponent implements OnInit {
  beneficiary: any;
  res: any;
  // dataSource = this.staff
  // displayedColumns=["status","fullName"]
  displayedColumns = ["benId", "date", "accountNumber", "accountType", "isApproved", "delete"]

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getUser().subscribe(res1 => {
      this.res = res1
      this.customerService.getAllBeneficiary(this.res.userId).subscribe(res => {

        this.beneficiary = res;
        console.log(this.beneficiary[0].benId)
      })
    })

  }
  removeBeneficiary(benId: any) {
    this.customerService.getUser().subscribe(res1 => {
      this.res = res1
      this.customerService.removeBeneficiary(this.res.userId, benId).subscribe(res => {
        console.log(res)
      })
    })

  }

}
