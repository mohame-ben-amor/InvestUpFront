import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Pole } from 'src/app/core/models/pole';
import { PoleService } from 'src/app/core/service/pole.service';

@Component({
  selector: 'app-pop-up-edit-pole',
  templateUrl: './pop-up-edit-pole.component.html',
  styleUrls: ['./pop-up-edit-pole.component.scss']
})
export class PopUpEditPoleComponent implements OnInit {

  form: FormGroup;
  idPole: number;
  pole: Pole;
  success = "";
  error = "";
  name: string;
  description: string;
  capacity: number;
  reserved: number;
  count: number = 0;

  constructor(
    public dialogRef: MatDialogRef<PopUpEditPoleComponent>,
    private route: Router,
    private poleService: PoleService
  ) { }

  ngOnInit(): void {
    this.idPole = +localStorage.getItem('idPole');
    this.name = localStorage.getItem('name');
    this.description = localStorage.getItem('description');
    this.capacity = +localStorage.getItem('capacity');
    this.reserved = +localStorage.getItem('reserved');
    setTimeout(() => {
      this.poleService.filterById(this.idPole).subscribe(
        pole => {
          this.pole = pole;
          console.log(this.pole);
        });
    }, 300)
    setTimeout(() => {
      console.log(this.pole);
    }, 600)

    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      'name': new FormControl("", [
        Validators.required,
        Validators.minLength(2)]),
      'description': new FormControl("", [
        Validators.required,
        Validators.minLength(10)]),
      'capacity': new FormControl("", [Validators.required,
      Validators.pattern("^[0-9]*$")]),
      'reserved': new FormControl("", [Validators.required,
      Validators.pattern("^[0-9]*$")]),
    });
  }

  onCancel() {
    console.log("clear button");
    this.form.reset();
    this.dialogRef.close();
  }

  onSubmit() {
    this.pole = this.form.getRawValue();

    if (this.pole.name.toString() != '') {
      this.poleService.updatePolename(this.idPole, this.pole.name).subscribe();
      setTimeout(() => {
        this.count++;
      }, 50);
    }
    if (this.pole.description.toString() != '') {
      this.poleService.updatePoledescription(this.idPole, this.pole.description).subscribe();
      setTimeout(() => {
        this.count++;
      }, 100);
    }
    if (this.pole.reserved.toString() != '') {
      this.poleService.updatePolereserved(this.idPole, this.pole.reserved).subscribe();
      setTimeout(() => {
        this.count++;
      }, 150);
    }
    if (this.pole.capacity.toString() != '') {
      this.poleService.updatePolecapacity(this.idPole, this.pole.capacity).subscribe();
      setTimeout(() => {
        this.count++;
      }, 200);
    }

    setTimeout(() => {
      if (this.count > 0) {
        this.success = "Your request has been sent successfuly ";
      } else {
        this.error = "Please check your networking";
      }
    }, 250);
    setTimeout(() => {
      this.form.reset();
      localStorage.removeItem('idPole');
      this.dialogRef.close();
      let currentUrl = this.route.url;
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate([currentUrl]);
    }, 500);

  }

}
