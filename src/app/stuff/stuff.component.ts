import { StaffService } from './../staff.service';
import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  Beneficiary:any;
  constructor(private router:Router, private staffservice:StaffService) { }

  ngOnInit(): void {
  }

  transfer(form:any){
    alert("values are "+ form.FromAccountNumber+","+ form.ToAccountNumber+",..")
    this.staffservice.transfer(form).subscribe(res=>{

    })
  }
  ApproveBeneficiary(id:any){

    alert("the id to approve beneficary"+id);

      this.staffservice.approveBeneficiary(id).subscribe(res=>{

          var message =res;

          alert(message)

      })  
    }

}
