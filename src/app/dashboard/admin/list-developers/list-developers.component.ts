import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Developer } from 'src/app/core/models/developer';
import { ProjectManager } from 'src/app/core/models/projectManager';
import { UserStatus } from 'src/app/core/models/userStatus';
import { PopUpDevelopersComponent } from './pop-up-developers/pop-up-developers.component';

@Component({
  selector: 'app-list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.scss']
})
export class ListDevelopersComponent implements OnInit {

  developers: Developer[] = [new ProjectManager(1, "Rayen", "CEHRNI", "222222222", "roro@cherni", "abdlahmid", ["dev site", "jeeniso site"], UserStatus.REMOTE),
  new Developer(2, "BEN amor", "Hama", "222222222", "rayen@cherni", "abdlahmid", ["marketing site"], UserStatus.PRESENTIAL)];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  idDeveloper = '';
  displayEditPopUp = '';
  displayDeletePopUp = '';

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(PopUpDevelopersComponent, dialogConfig);
  }
  onEdit(id: number) {
    console.log("id project manager from edit button: " + id);
    this.idDeveloper = id.toString();
    this.displayEditPopUp = 'true';
    this.displayDeletePopUp = 'false';
    localStorage.setItem('idDeveloper', this.idDeveloper);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    this.onCreate();
  }
  onDelete(id: number, firstname: string, lastname: string) {

    console.log("id project manager from edit button: " + id);
    this.idDeveloper = id.toString();
    this.displayEditPopUp = 'false';
    this.displayDeletePopUp = 'true';
    localStorage.setItem('idDeveloper', this.idDeveloper);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    this.onCreate();

  }
}
