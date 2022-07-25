import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addbeneficiary',
  templateUrl: './addbeneficiary.component.html',
  styleUrls: ['./addbeneficiary.component.css']
})
export class AddbeneficiaryComponent implements OnInit {
  beneficiaryDetails: any
  accountType: any
  isApproved: any
  errorMsg:any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.isApproved = new FormControl()
    this.accountType = new FormControl()


    this.beneficiaryDetails = new FormGroup({
      userId: new FormControl(this.customerService.getUserID(this.customerService.getUser()), Validators.required),
      accountNumber: new FormControl('', Validators.required)
    })
  }
  addBeneficiary() {
    var customer: any;

    this.customerService.getUser().subscribe(res => {
      customer = res
      console.log(customer)
      var accountType = this.accountType.value;
      var isApproved = "NO"
      var accountNumber: number = this.beneficiaryDetails.controls.accountNumber.value;
      console.log(new BeneficiaryPojo(accountNumber, accountType, isApproved))
      this.customerService.addBeneficiary(customer.userId, new BeneficiaryPojo(accountNumber, accountType, isApproved)).subscribe(res => {
        console.log(new BeneficiaryPojo(accountNumber, accountType, isApproved))
        console.log(isApproved)
        this.errorMsg="Added beneficiary successfully!!"
      })

    });

  }
}
class BeneficiaryPojo {
  constructor(private accountNumber: any, private accountType: any, private isApproved: any) {

  }
}
