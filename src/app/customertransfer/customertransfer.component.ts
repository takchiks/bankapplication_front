import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(private service:CustomerService,private router:Router,private matsnackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(res=>{
      this.customer = res;
      this.service.getAllAccounts(this.customer.userId).subscribe(res=>{
        this.customerAccountNumbers=res;
      })
    })
  }


  transferAmount(form:any){
    console.log("it came here");
    this.service.transfer(form).subscribe(res=>{
      console.log(res);
      console.log("Amount Transferred");
      this.errorMsg ="Amount is successfully transferred"
      this.redirect('ctransfer');
      this.matsnackbar.open("Successfully Transferred Amount","DISMISS", {
        duration: 3000,
        verticalPosition: 'top'
      });
     },error=>
    this.errorMsg = error.error.message)
    
      
    
  }

  redirect(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }



}
