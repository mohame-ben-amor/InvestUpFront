import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  editForm: FormGroup;
  idProjectManager = "";
  displayDeletePopUp = "";
  displayEditPopUp = ""
  firstname = "";
  lastname = "";
  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];
  roles = ["Project Manager", "Pole Manager"];
  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>) { }

  ngOnInit(): void {
    this.idProjectManager = localStorage.getItem('idProjectManager');
    this.displayEditPopUp = localStorage.getItem('displayEditPopUp');
    this.displayDeletePopUp = localStorage.getItem('displayDeletePopUp');
    this.firstname = localStorage.getItem('firstname');
    this.lastname = localStorage.getItem('lastname');
    this.initForm();
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
    localStorage.removeItem('idProjectManager');
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
    localStorage.removeItem('idProjectManager');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    this.dialogRef.close();
  }
  onDelete() {
    //API delete here !!
    localStorage.removeItem('idProjectManager');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname'); 
    this.dialogRef.close();
  }

}
