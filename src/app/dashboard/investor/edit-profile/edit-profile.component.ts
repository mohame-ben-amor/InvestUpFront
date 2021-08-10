import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { InvestorService } from 'src/app/core/service/investor.service';
import { formatDate } from '@angular/common';

import { Router } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  form: FormGroup;

  Sexe = ["Male", "Female"];

  constructor(
    private investorService: InvestorService,
    private route: Router,
    private userService: UserService
  ) { }

  error = "";
  success = "";
  user: User;
  name = "";
  birthday: FormControl;
  updatedBirthday: string = "";
  adresse = "";
  sexe = "";
  profil = "";
  count: number = 0;
  infoUser: User;
  currentUser: any;
  //date = new FormControl(new Date(this.birth));
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
      'profil': new FormControl("", [Validators.required,
      Validators.minLength(10)]),
    });
    ///this.birthday = new FormControl(formatDate(this.user.birthday, 'yyyy-MM-dd', 'en'));
  }

  onSubmit() {

    this.user = this.form.getRawValue();
    //const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.error = "";
    this.success = "";
    console.log(this.user);



    if (this.user.name != "") {
      console.log(this.user);

      this.name = this.user.name.toString();
      this.investorService.editName(this.name).subscribe((res) => {
        this.infoUser["name"] = this.name;

      });
      setTimeout(() => {
        this.count++;

      }, 50);
    }

    if (this.user.profil != "") {
      this.profil = this.user.profil.toString();
      this.investorService.editProfil(this.profil).subscribe((res) => {
        this.infoUser["profil"] = this.profil;
      });

      setTimeout(() => {
        this.count++;
      }, 100);
    }
    if (this.user.sexe.toString() != "") {
      this.sexe = this.user.sexe.toString();
      this.investorService.editSexe(this.sexe).subscribe((res) => {
        this.infoUser["sexe"] = this.sexe;

      });
      setTimeout(() => {
        this.count++;
      }, 150);
    }
    if (this.user.adresse.toString() != "") {
      this.adresse = this.user.adresse.toString();
      this.investorService.editAdresse(this.adresse).subscribe((res) => {
        this.infoUser["adresse"] = this.adresse;

      });
      setTimeout(() => {
        this.count++;
      }, 200);

    }
    if (this.user.birthday.toString() != "") {

      this.updatedBirthday = formatDate(this.user.birthday, 'yyyy-MM-dd', 'en');
      this.investorService.editBirthday(this.updatedBirthday).subscribe((res) => {
        this.infoUser["birthday"] = this.birthday.value;

      });
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

      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.form.reset();
      let currentUrl = this.route.url;
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate([currentUrl]);
    }, 500);
  }


  onClear() {
    this.form.reset();
  }

  getInfo() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const id = +this.currentUser["user"]["id"];
    this.userService.getUser(id).subscribe((res) => {
      console.log(res);
      this.name = res.name;
      this.birthday = new FormControl(new Date(res.birthday));
      console.log(this.birthday);
      this.adresse = res.adresse;
      this.sexe = res.sexe;
      this.profil = res.profil;
    });
  }



}
