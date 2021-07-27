import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-planification',
  templateUrl: './pop-up-planification.component.html',
  styleUrls: ['./pop-up-planification.component.scss']
})
export class PopUpPlanificationComponent implements OnInit {

  editForm: FormGroup;
  idHistory = "" ;
  displayEditPopUp = "" ;
  decision = ["Presential", "Remote"];

  constructor(public dialogRef: MatDialogRef<PopUpPlanificationComponent>,private route:Router) { }

  ngOnInit(): void {

    this.idHistory = localStorage.getItem('idHistory');
    this.displayEditPopUp = localStorage.getItem('displayEditPopUp');
    this.initForm();
  }

  private initForm() {

    this.editForm = new FormGroup({
      'dicisionMessage': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    console.log("clear button");
    this.editForm.reset();
    
    localStorage.removeItem('displayEditPopUp');
    this.dialogRef.close();
  }

  onSubmit() {
    console.log("Submit button");
    let dicisionMessage = "";
    dicisionMessage = this.editForm.value.dicisionMessage;
    //API change status here !! 
    localStorage.setItem('decision', dicisionMessage); 

    this.editForm.reset();
    
    localStorage.removeItem('displayEditPopUp');
    this.dialogRef.close();

    let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);

  }
}
