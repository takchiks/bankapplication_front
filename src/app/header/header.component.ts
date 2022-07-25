import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { CustomerService } from '../customer.service';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean = false;
  welcomeMsg = "Welcome, ";
  staffCornerVisibility:boolean = false;

  constructor(
    private router:Router, 
    public service:CustomerService,
    public staffService: StaffService,
    public adminService: AdminService
    ) { }


  ngOnInit(): void {
  }

  handleLogout() {
    this.service.logout();
    this.router.navigate([('/login')]);
  }
 
  goStaffLogin(){
    this.router.navigate([('staff_login')])
  }
}
