import { StaffService } from './../staff.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approve-beneficary',
  templateUrl: './approve-beneficary.component.html',
  styleUrls: ['./approve-beneficary.component.css']
})
export class ApproveBeneficaryComponent implements OnInit {
 Beneficaries:any;
 

  constructor(private route:ActivatedRoute, private staffservice: StaffService) { }

  ngOnInit(): void {

   // this.route.paramMap.subscribe(res=>{

      // console.log('the data fetched from the url is ')
       
       // var id = res.get("benId")

       // this.staffservice.getApprovedBeneficiary().subscribe(res=>{
//
        //  this.getBeneficary =res;
        //})
    //})
console.log("inside approve bef. comm..")
    this.staffservice.getApprovedBeneficiary().subscribe(res=>{

      this.Beneficaries = res;
    })
     
  }

  approveBeneficary(beneficary:any){
    alert("in approve account"+ beneficary.benId+ " "+ beneficary.accountType+" "+" "+beneficary.accountNumber)
    beneficary.isApproved = "YES"
    this.staffservice.approveBeneficaryAccount(new beneficaryRequest(beneficary.benId,beneficary.accountNumber,beneficary.date,beneficary.isApproved ))
    .subscribe(res=>this.Beneficaries = res)

  }


}
class beneficaryRequest{
  constructor (private fromCustomer:any, private beneficiaryAcNo:any, private beneficiaryAddedDate:any, private approved:any ){

  }
}


