import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pop-up-developers',
  templateUrl: './pop-up-developers.component.html',
  styleUrls: ['./pop-up-developers.component.scss']
})
export class PopUpDevelopersComponent implements OnInit {
  editForm: FormGroup;

  idDeveloper = "";
  displayDeletePopUp = "";
  displayEditPopUp = ""
  firstname = "";
  lastname = "";
  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];
  roles = ["Project Manager", "Developer"];
  constructor(public dialogRef: MatDialogRef<PopUpDevelopersComponent>) { }

  ngOnInit(): void {
    this.idDeveloper = localStorage.getItem('idDeveloper');
    this.displayEditPopUp = localStorage.getItem('displayEditPopUp');
    this.displayDeletePopUp = localStorage.getItem('displayDeletePopUp');
    this.firstname = localStorage.getItem('firstname');
    this.lastname = localStorage.getItem('lastname');
    this.initForm()
  }


  private initForm() {

    this.editForm = new FormGroup({
      'withHoldingStatus': new FormControl("", Validators.required),
      'role': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    console.log("clear button");
    this.editForm.reset();
    localStorage.removeItem('idDeveloper');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    this.dialogRef.close();
  }

  onSubmit() {
    console.log("Submit button");
    let withHoldingStatus = "";
    withHoldingStatus = this.editForm.value.withHoldingStatus;
    //API change status here !! 
    this.editForm.reset();
    localStorage.removeItem('idDeveloper');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    this.dialogRef.close();
  }
  onDelete() {
    //API delete here !!
    localStorage.removeItem('idDeveloper');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname'); 
    this.dialogRef.close();
  }

}
