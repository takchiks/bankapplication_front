import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  // success = '';
  // public registerForm: FormGroup = new FormGroup(
  //   {
  //     userName: new FormControl('', [Validators.required]),
  //     fullName: new FormControl('', [Validators.required]),
  //     phoneNumber: new FormControl('', [Validators.required, Validators.email]),
  //     passWord: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(8)
  //     ]),
  //     confirmPassword: new FormControl('', [Validators.required]),
  //     secret_question: new FormControl('', [Validators.required]),
  //     secret_answer: new FormControl('', [Validators.required])
  //   },

  //   CustomValidators.mustMatch('passWord', 'confirmPassword') // insert here
  // );

  // submitted = false;
  constructor(private router:Router, private http:HttpClient, private userService:CustomerService) { }

  ngOnInit(): void {
  }

  // registerForm = new FormGroup({
  //   userName: new FormControl('', Validators.required),
  //  fullName: new FormControl('', Validators.required),
  //    passWord: new FormControl('', Validators.required),
  //    confirmPassword: new FormControl('', Validators.required),
  //    phoneNumber: new FormControl('', Validators.required),
  //    secret_question: new FormControl('', Validators.required),
  //    secret_answer: new FormControl('', Validators.required),
  // })





  register(form:any) {
    console.log("inside register() "+form.fullName+", "+form.userName+", "+form.passWord+", "+form.phoneNumber+", "+form.secret_question+", "+form.secret_answer);

    this.userService.register(form).subscribe(res=>{
      
      this.router.navigate([('/login')])
    })
  }

  // get f() {
  //   return this.registerForm.controls;
  // }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }

  //   this.success = JSON.stringify(this.registerForm.value);
  // }
}

class CustomValidators {
  constructor() {}

  static onlyChar(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value == '') return null;

      let re = new RegExp('^[a-zA-Z ]*$');
      if (re.test(control.value)) {
        return null;
      } else {
        return { onlyChar: true };
      }
    };
  }
  static mustMatch(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }
}
