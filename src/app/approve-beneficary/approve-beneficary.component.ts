import { MatSnackBar } from '@angular/material/snack-bar';
import { StaffService } from './../staff.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-approve-beneficary',
  templateUrl: './approve-beneficary.component.html',
  styleUrls: ['./approve-beneficary.component.css']
})
export class ApproveBeneficaryComponent implements OnInit {
 Beneficaries:any;
 Benficary:any
 
 displayedColumns=["date","accountNumber","accountType","isApproved","accountType","approve"]

  constructor(private router: Router, private staffservice: StaffService,private matsnackbar:MatSnackBar) { }

  ngOnInit(): void {

   console.log("inside approve bef. comm..")
   this.staffservice.currentMessageSubscriber.subscribe(result=>{

  
    this.staffservice.getApprovedBeneficiary().subscribe(res=>{

      this.Beneficaries = res;
    })
  })
     
  }
  
  approveBeneficary(beneficary:any){
    console.log("in approve account"+ beneficary.benId+ " "+ beneficary.accountType+" "+" "+beneficary.accountNumber)
    beneficary.isApproved = "YES"
    this.staffservice.approveBeneficaryAccount(new beneficaryRequest(beneficary.benId,beneficary.accountNumber,beneficary.date,beneficary.isApproved ))
    .subscribe(res=>{this.Benficary = res
      
      this.matsnackbar.open("Beneficary Approved","close", {
        
        duration: 2000,
        // here specify the position
        verticalPosition: 'top'
      });
      this.staffservice.notify({isRefresh:true});
    
    })

  }
  redirect(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }




}
class beneficaryRequest{
  constructor (private fromCustomer:any, private beneficiaryAcNo:any, private beneficiaryAddedDate:any, private approved:any ){

  }

 
}


