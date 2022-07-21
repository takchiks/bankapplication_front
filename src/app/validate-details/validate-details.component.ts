import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-validate-details',
  templateUrl: './validate-details.component.html',
  styleUrls: ['./validate-details.component.css']
})
export class ValidateDetailsComponent implements OnInit {
  customer:any;
  constructor(private service:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }

  validateDetails(form:any){
    this.service.validateDetails(form.username,form.secret_question, form.secret_answer).subscribe(res=>{
      //alert(res);
      this.customer=res;
      alert(this.customer);
      if(this.customer ==="Details Validated"){
        this.router.navigate([('/forgot-password')])
      }
      else{
        alert("Sorry, your username, question and answer mismatched.")
      }
    });

  }

}
