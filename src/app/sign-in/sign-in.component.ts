import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Role } from 'src/app/core/models/role';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  authForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)],],
      password: ['', Validators.required],
    });
  }
  get formValue() {
    return this.authForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    
    if (this.authForm.invalid) {
      return ;
    } else {
      this.authService
        .login(this.formValue.email.value, this.formValue.password.value)
        .subscribe(
          (res) => {
            if (res) {
              const role = this.authService.currentUserValue.role;
              if (role === Role.ADMIN) {
                this.router.navigate(['/admin/dashboard/main']);
              } else if (role === Role.POLE_MANAGER) {
                this.router.navigate(['/teacher/dashboard']);
              } else if (role === Role.PROJECT_MANAGER) {
                this.router.navigate(['/student/dashboard']);
              } else if (role === Role.DEVELOPER) {
                this.router.navigate(['/student/dashboard']);
              }
            }
          },
          (error) => {
            console.log(error["error"]["message"]);
            this.submitted = false;
            return this.error = error;
          }
        );
    }
    console.log(this.formValue.email.value, this.formValue.password.value);
  }

}
