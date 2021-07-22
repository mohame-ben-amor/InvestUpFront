import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  createForm:FormGroup;
  deleteForm: FormGroup;
  displayCreatePopUp = "";
  displayDeletePopUp = "";
  projects: Project[] = [new Project(1, "dev dev website", 2),
  new Project(2, "BEN amor website", 4)];
  constructor(public dialogRef: MatDialogRef<PopUpComponent>) { }

  ngOnInit(): void {
    this.displayCreatePopUp = localStorage.getItem('displayCreatePopUp');
    this.displayDeletePopUp = localStorage.getItem('displayDeletePopUp');
    this.initCreateForm();
  }
  private initCreateForm() {
    this.createForm = new FormGroup({
      'name': new FormControl("", [Validators.required,
      Validators.minLength(2)]),
    });
  }


  onCancel() {
    console.log("clear button");
    this.createForm.reset();
    localStorage.removeItem('displayCreatePopUp');
    localStorage.removeItem('displayDeletePopUp');
    this.dialogRef.close();
  }

  onSubmit() {
    console.log("Submit button");
    let name = this.createForm.value.name;
    console.log("name of project : "+name);
    //API Cretae project here !! 
    this.createForm.reset();
    localStorage.removeItem('displayCreatePopUp');
    localStorage.removeItem('displayDeletePopUp');
    this.dialogRef.close();
  }

  onDelete() {
    //API delete here !!
    //we need to recupere l'id de la projet selectionne !
    let id = this.createForm.value.name;
    console.log("id project is: " +id);
    localStorage.removeItem('displayCreatePopUp');
    localStorage.removeItem('displayDeletePopUp');
    this.dialogRef.close();
  }
}
