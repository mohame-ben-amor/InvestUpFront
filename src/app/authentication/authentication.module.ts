import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { Page404Component } from './page404/page404.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as Material from "@angular/material";
import { ContactPopUpComponent } from './sign-in/contact-pop-up/contact-pop-up.component';

@NgModule({
  declarations: [
    Page404Component,
    SignInComponent,
    ForgotPasswordComponent,
    ContactPopUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    Material.MatDialogModule
  ],
  exports: [Material.MatDialogModule],
  entryComponents:[ContactPopUpComponent]

})
export class AuthenticationModule {}
