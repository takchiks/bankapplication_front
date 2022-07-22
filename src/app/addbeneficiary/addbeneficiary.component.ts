import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbeneficiary',
  templateUrl: './addbeneficiary.component.html',
  styleUrls: ['./addbeneficiary.component.css']
})
export class AddbeneficiaryComponent implements OnInit {
  beneficiaryDetails:any
  accountType:any

  constructor() { }

  ngOnInit(): void {
  }
  addBeneficiary(){}
}
