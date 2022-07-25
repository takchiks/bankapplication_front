import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  errorMsg:any;

  constructor(private customerService: CustomerService, private matsnackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.customerService.getUser().subscribe(res1 => {
      this.res = res1
      console.log(this.res.userId)
      this.customerService.getAllBeneficiary(this.res.userId).subscribe(res => {

        this.beneficiary = res;

        console.log(this.beneficiary[0].benId)
      })
    })

  }
  removeBeneficiary(benId: any) {
    console.log(benId)
    this.customerService.getUser().subscribe(res1 => {
      this.res = res1
      this.customerService.removeBeneficiary(this.res.userId, benId).subscribe(res => {
        console.log(res)
        this.errorMsg="Removed Beneficiary Successfully"
        this.matsnackbar.open("Removed Beneficiary Successfully","DISMISS")
      })
    })

  }

}
