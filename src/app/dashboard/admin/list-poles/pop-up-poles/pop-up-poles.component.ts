import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { PoleManager } from 'src/app/core/models/poleManager';
import { UserStatus } from 'src/app/core/models/userStatus';
import { PoleManagerService } from 'src/app/core/service/pole-manager.service';

@Component({
  selector: 'app-pop-up-poles',
  templateUrl: './pop-up-poles.component.html',
  styleUrls: ['./pop-up-poles.component.scss']
})
export class PopUpPolesComponent implements OnInit {

  editForm: FormGroup;
  idPole = "";
  displayDeletePopUp = "";
  displayEditPopUp = ""
  poleName = "";
  //poleManagers: PoleManager[] = [new PoleManager(1, "Rayen", "CEHRNI", "222222222", "roro@cherni", "abdlahmid", "dev dev", UserStatus.REMOTE),
  //new PoleManager(2, "BEN amor", "Hama", "222222222", "rayen@cherni", "abdlahmid", "dev marketing", UserStatus.PRESENTIAL)];
  poleManagers: PoleManager[]=[];

  constructor(public dialogRef: MatDialogRef<PopUpPolesComponent>,
    private poleManagerService:PoleManagerService) { }

  ngOnInit(): void {
    this.idPole = localStorage.getItem('idPole');
    this.displayEditPopUp = localStorage.getItem('displayEditPopUp');
    this.displayDeletePopUp = localStorage.getItem('displayDeletePopUp');
    this.poleName = localStorage.getItem('poleName');
    this.initForm();
  }

  private initForm() {
    this.editForm = new FormGroup({
      'poleManager': new FormControl("", Validators.required),
    });
  }
  onCancel() {
    console.log("clear button");
    this.editForm.reset();
    localStorage.removeItem('idPole');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('poleName');
    this.dialogRef.close();
  }

  onSubmit() {
    console.log("Submit button");
    let poleManager = this.editForm.value.poleManager;
    console.log(poleManager);
    //API change status here !! 
    this.editForm.reset();
    localStorage.removeItem('idPole');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('poleName'); 
    this.dialogRef.close();
  }
  onDelete() {
    //API delete here !!
    localStorage.removeItem('idPole');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('poleName');
    this.dialogRef.close();
  }

  getAllPoleManagers() {
    this.poleManagerService.getAll().subscribe(
      poleManager => {
        console.log("Pole manager table from API "+poleManager);
        this.poleManagers = poleManager;
        console.log("Pole manager table from componenent : "+ poleManager)
      });
  }
}
