import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-admincreatestaff',
  templateUrl: './admincreatestaff.component.html',
  styleUrls: ['./admincreatestaff.component.css']
})
export class AdmincreatestaffComponent implements OnInit {
  adminDetails:any;

  constructor(private adminService:AdminService, private customerService:CustomerService) { }

  ngOnInit(): void {
    this.adminDetails = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      ratings: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required)
    })
  }

}
