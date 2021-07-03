import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void  {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      first: ['', Validators.required],
      last: ['', Validators.required],
      phone:['', [ Validators.required,
        Validators.pattern("^[0-9]*$")
         ]],
      date: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    
    this.submitted = true;
    console.log("%hello");
    // stop here if form is invalid
    //if (this.authForm.invalid) {
      //return;
    //} else {
     // this.router.navigate(['/admin/dashboard/main']);
    //}
  }
}
