import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminapprovestaff',
  templateUrl: './adminapprovestaff.component.html',
  styleUrls: ['./adminapprovestaff.component.css']
})
export class AdminapprovestaffComponent implements OnInit {
  staff:any =[{"name":"me"},{"name":"maya"},{"name":"tamiah"},{"name":"tabitha"}]
  // dataSource = this.staff
  displayedColumns=["name","enable"]
  constructor() { }

  ngOnInit(): void {
    // this.staffservice.getApprovedBeneficiary().subscribe(res=>{

    //   this.getBeneficary = res;
    // })
     
  } 

}
