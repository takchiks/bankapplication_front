import { StaffService } from './../staff.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approve-beneficary',
  templateUrl: './approve-beneficary.component.html',
  styleUrls: ['./approve-beneficary.component.css']
})
export class ApproveBeneficaryComponent implements OnInit {
 getBeneficary:any

  constructor(private route:ActivatedRoute, private staffservice: StaffService) { }

  ngOnInit(): void {
        this.staffservice.getApprovedBeneficiary().subscribe(res=>{

          this.getBeneficary =res;

    })
  }

}
