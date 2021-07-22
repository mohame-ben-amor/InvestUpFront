import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { User } from 'src/app/core/models/user';
import { RoleEnum } from 'src/app/core/models/roleEnum';

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
  currentUser: { "accessToekn": "", "user": User };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
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
      return;
    } else {
      this.authService
        .login(this.formValue.email.value, this.formValue.password.value)
        .subscribe(
          (res) => {
            if (res) {
              //***** Method 1 from the localStorage direct ********** 
              //this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
              //console.log("token: " + this.currentUser["accessToken"]);
              //const role = this.currentUser["user"]["role"]["roleName"];
              //console.log("Role : " + role);

              // ****** method 2 from the localStorage but using a inter method ***
              console.log("Token second method boy : " + this.authService.getCurrentUserValue.accessToken);
              console.log(this.authService.getCurrentUserValue.user.role.roleName);
              const accesToken = this.authService.getCurrentUserValue.accessToken;
              const role = this.authService.getCurrentUserValue.user.role.roleName;
              
              if (role === RoleEnum.ADMIN) {
                this.router.navigate(['/dashboard/admin']);
              } else if (role === RoleEnum.POLE_MANAGER) {
                this.router.navigate(['/dashboard/polemanager']);
              } else if (role === RoleEnum.PROJECT_MANAGER) {
                this.router.navigate(['/dashboard/projectmanager']);
              } else if (role === RoleEnum.DEVELOPER) {
                this.router.navigate(['/dashboard/developer']);
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
