import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.css']
})
export class CustomerupdateComponent implements OnInit {
  customer: any
  result:any

  constructor(private customerService: CustomerService, private matsnackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.customerService.getUser().subscribe(res => {
      this.result = res
      console.log(this.result.userId)

      this.customer = new FormGroup({
        userId: new FormControl(this.result.userId, Validators.required),
        phoneNumber: new FormControl(this.result.phoneNumber, Validators.required),
        secret_question: new FormControl(this.result.secret_question, Validators.required),
        secret_answer: new FormControl(),
        fullName: new FormControl(this.result.fullName, Validators.required),
        status: new FormControl(this.result.status, Validators.required),
        userName: new FormControl(this.result.userName, Validators.required),
        role: new FormControl(this.result.role, Validators.required)
      })
    })
  }

  updateCustomer(){
    console.log(this.customer.controls.fullName.value)
    let secret = this.customer.controls.secret_answer.value
    if (secret==null||secret==undefined||secret==""){
      secret= this.result.secret_answer
    }
    var customer= new CustomerPojo(this.customer.controls.userId.value
      , this.customer.controls.fullName.value, 
      this.customer.controls.userName.value,
      this.customer.controls.status.value, 
      this.customer.controls.phoneNumber.value,
      this.customer.controls.secret_question.value,
      secret)
      console.log(customer)
      this.customerService.cupdate(this.customer.controls.userId.value,customer).subscribe(res=>{
        console.log(res)
        this.matsnackbar.open("Updated Customer Successfully","DISMISS")
      })
    }

    


}

class CustomerPojo{
  constructor(private userId:any, private fullName:any, private userName:any, private status:any, private phoneNumber:any, private secret_question:any, private secret_answer:any){

    }


}
