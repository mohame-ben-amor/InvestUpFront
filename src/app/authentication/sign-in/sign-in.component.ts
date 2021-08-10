import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { User } from 'src/app/core/models/user';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ContactPopUpComponent } from './contact-pop-up/contact-pop-up.component';
import { HttpClient } from '@angular/common/http';


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
  currentUser: { "token": "", "user": User };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog,
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

    console.log(this.authForm.getRawValue());
    const email = this.formValue.email.value;
    const password = this.formValue.password.value;
    this.submitted = true;
    this.error = '';
    this.authService.login(email,password).subscribe((res) => {
      
      if (res) {
        const accesToken = this.authService.getCurrentUserValue.token;
        const role = this.authService.getCurrentUserValue.user.role;
        if (role === "Investor") {
          this.router.navigate(['/dashboard/investor']);
        } else if (role === "Entrepreneur") {
          this.router.navigate(['/dashboard/entrepreneur']);
        } else if (role === "Admin") {
          this.router.navigate(['/dashboard/admin']);
        } 
        console.log(res);
      }
    },
      (err) => {
        console.log(err);
      });
    console.log(this.formValue.email.value, this.formValue.password.value);
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(ContactPopUpComponent, dialogConfig);
  }
}
