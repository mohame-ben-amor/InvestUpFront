import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { InvestorService } from 'src/app/core/service/investor.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  form: FormGroup;

  Sexe = ["Male", "Female"];

  constructor(private investorService: InvestorService) { }
  error = "";
  success = "";
  user: User;
  name = "";
  birthday = "";
  adresse = "";
  sexe = "";
  profile = "";
  count: number = 0;

  ngOnInit(): void {
    this.initForm();
    this.getInfo();
  }

  private initForm() {

    this.form = new FormGroup({
      'name': new FormControl("", [
        Validators.required,
        Validators.minLength(2)]),
      'birthday': new FormControl("", [Validators.required]),
      'adresse': new FormControl("", [Validators.required]),
      'sexe': new FormControl("", [Validators.required]),
      'profile': new FormControl("", [Validators.required,
      Validators.minLength(10)]),
    });
  }

  onSubmit() {

    this.user = this.form.getRawValue();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.error = "";
    this.success = "";

    if (this.user.name.toString() != "") {
      this.name = this.user.name.toString();
      this.investorService.editName(this.name).subscribe();
      setTimeout(() => {
        this.count++;
      }, 50);
    }
    if (this.user.profile.toString() != "") {
      this.profile = this.user.profile.toString();
      this.investorService.editProfil(this.profile).subscribe();
      setTimeout(() => {
        this.count++;
      }, 100);
    }
    if (this.user.sexe.toString() != "") {
      this.sexe = this.user.sexe.toString();
      this.investorService.editSexe(this.sexe).subscribe();
      setTimeout(() => {
        this.count++;
      }, 150);
    }
    if (this.user.adresse.toString() != "") {
      this.adresse = this.user.adresse.toString();
      this.investorService.editAdresse(this.adresse).subscribe();
      setTimeout(() => {
        this.count++;
      }, 200);

    }
    if (this.user.birthday.toString() != "") {
      this.birthday = this.user.birthday.toString();
      this.investorService.editBirthday(this.birthday).subscribe();
      setTimeout(() => {
        this.count++;
      }, 250);
    }
    setTimeout(() => {
      if (this.count > 0) {
        this.success = "Your request has been sent successfuly ";
      } else {
        this.error = "Please check your networking";
      }
    }, 300);
    
    setTimeout(() => {
      this.form.reset();
    }, 500);
  }

  onClear() {
    this.form.reset();
  }

  getInfo() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.name = currentUser["user"]["name"];

    //Birthday mahosh kaaed yodh'her fl template khater mahosh kaaed yji ml API f nafes el format 
    // eli y'accepteha el component mtaa picker date ! 
    this.birthday = currentUser["user"]["birthday"];
    console.log("birthday : " + this.birthday);
    this.adresse = currentUser["user"]["adresse"];
    this.sexe = currentUser["user"]["sexe"];
    this.profile = currentUser["user"]["profil"];
  }

}
