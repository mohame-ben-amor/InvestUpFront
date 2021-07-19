import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up-pole-managers',
  templateUrl: './pop-up-pole-managers.component.html',
  styleUrls: ['./pop-up-pole-managers.component.scss']
})
export class PopUpPoleManagersComponent implements OnInit {

  editForm: FormGroup;
  idPoleManager = "";
  displayDeletePopUp = "";
  displayEditPopUp = ""
  firstname = "";
  lastname = "";
  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];

  constructor(
    public dialogRef: MatDialogRef<PopUpPoleManagersComponent>) { }

  ngOnInit(): void {
    this.idPoleManager = localStorage.getItem('idPoleManager');
    this.displayEditPopUp = localStorage.getItem('displayEditPopUp');
    this.displayDeletePopUp = localStorage.getItem('displayDeletePopUp');
    this.firstname = localStorage.getItem('firstname');
    this.lastname = localStorage.getItem('lastname');
    this.initForm();
  }

  private initForm() {

    this.editForm = new FormGroup({
      'withHoldingStatus': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    console.log("clear button");
    this.editForm.reset();
    localStorage.removeItem('idPoleManager');
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
    localStorage.removeItem('idPoleManager');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    this.dialogRef.close();
  }
  onDelete() {
    //API delete here !!
    localStorage.removeItem('idPoleManager');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    this.dialogRef.close();
  }


}
