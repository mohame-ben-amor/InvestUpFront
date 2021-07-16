import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
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

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }
  private initForm() {
    let user = new User();
    let cpassword: "";

    this.form = new FormGroup({
      'firstname': new FormControl(user.firstname, [
        Validators.required,
        Validators.minLength(2)]),
      'lastname': new FormControl(user.lastname, [
        Validators.required,
        Validators.minLength(2)]),

      'email': new FormControl(user.email, [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      'password': new FormControl(user.password, [Validators.required]),
      'cpassword': new FormControl(cpassword, [Validators.required]),
      'phone': new FormControl(user.phone, [Validators.required,
      Validators.pattern("^[0-9]*$")]),
      'role': new FormControl(user.role, Validators.required),
      'userStatus': new FormControl(user.userStatus, [Validators.required]),
      'withHoldingStatus': new FormControl(user.withHoldingStatus, [Validators.required]),

    });
  }

  get getFormValues() {
    return this.form.value;
  }

  onSubmit() {
    console.log(this.form.value);
    this.onClear();
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

