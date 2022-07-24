import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router:Router, public service:CustomerService) { }

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
