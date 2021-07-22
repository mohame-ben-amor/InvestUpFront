import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-edit-pole',
  templateUrl: './pop-up-edit-pole.component.html',
  styleUrls: ['./pop-up-edit-pole.component.scss']
})
export class PopUpEditPoleComponent implements OnInit {

  form: FormGroup;
  idPole: number;

  constructor(public dialogRef: MatDialogRef<PopUpEditPoleComponent>, private route: Router) { }

  ngOnInit(): void {
    this.idPole = +localStorage.getItem('idPole');
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
    console.log("Submit button");
    console.log("idPole pop up "+this.idPole);
    console.log(this.form.value);
    //API change status here !! 
    this.form.reset();
    localStorage.removeItem('idPole');
    this.dialogRef.close();
    let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);
  }

}
