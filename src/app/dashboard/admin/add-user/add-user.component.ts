import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AdminService } from 'src/app/core/service/admin.service';

//Note : fait l'inseration de tous les services dans le app module !! cause : video 20 et 21 dans le dossier 16 de maxi  
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  form: FormGroup;
  roles = ['Admin', 'Project Manager', 'Pole Manager', 'Developer'];
  userStatusList = ["Presential", "Remote"];
  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];
  error = '';

  constructor(private adminService: AdminService
  ) { }

  ngOnInit() {
    this.initForm();
  }
  private initForm() {
    this.form = new FormGroup({
      'firstname': new FormControl("", [
        Validators.required,
        Validators.minLength(2)]),
      'lastname': new FormControl("", [
        Validators.required,
        Validators.minLength(2)]),

      'email': new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      'password': new FormControl("", [Validators.required]),
      'cpassword': new FormControl("", [Validators.required]),
      'phone': new FormControl("", [Validators.required,
      Validators.pattern("^[0-9]*$")]),
      'adress': new FormControl("", [Validators.required]),
      'role': new FormControl("", Validators.required),
      'userStatus': new FormControl("", [Validators.required]),
      'withHoldingStatus': new FormControl("", [Validators.required]),

    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      this.adminService
        .createUser(
          this.form.value.adress,
          this.form.value.email,
          this.form.value.firstname,
          this.form.value.lastname,
          this.form.value.password,
          this.form.value.role,
          this.form.value.phone,
          this.form.value.userStatus,
          this.form.value.withHoldingStatus
          )
        .subscribe(
          (res) => {
            console.log("success : " + res);
          },
          (errorMessage) => {
            console.log(errorMessage);
            console.log("Error en princ " + errorMessage["error"]["message"]);
            return this.error = errorMessage;
          //  console.log(errorMessage);
            //return this.error = errorMessage;
          }
        );
    }
    console.log(this.form.value.adress,
      this.form.value.email,
      this.form.value.firstname,
      this.form.value.lastname,
      this.form.value.password,
      this.form.value.role,
      this.form.value.phone,
      this.form.value.userStatus,
      this.form.value.withHoldingStatus);
    this.form.reset();
  }



  onClear() {
    this.form.reset();
  }
  /*
    onEditUser(){
      this.router.navigate(['edit'],{relativeTo:this.route});
    }
    */
}

