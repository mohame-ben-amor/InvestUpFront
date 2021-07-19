import { Component, OnInit } from '@angular/core';
import { PoleManager } from 'src/app/core/models/poleManager';
import { UserStatus } from 'src/app/core/models/userStatus';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { PopUpComponent } from './pop-up/pop-up.component';
import { ProjectManager } from 'src/app/core/models/projectManager';

@Component({
  selector: 'app-all-project-managers',
  templateUrl: './all-project-managers.component.html',
  styleUrls: ['./all-project-managers.component.scss']
})
export class AllProjectManagersComponent implements OnInit {

  projectManagers: ProjectManager[] = [new ProjectManager(1, "Rayen", "CEHRNI", "222222222", "roro@cherni", "abdlahmid", ["dev site", "jeeniso site"], UserStatus.REMOTE),
  new ProjectManager(2, "BEN amor", "Hama", "222222222", "rayen@cherni", "abdlahmid", ["marketing site"], UserStatus.PRESENTIAL)];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  idProjectManager = '';
  displayEditPopUp = '';
  displayDeletePopUp = '';

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(PopUpComponent, dialogConfig);
  }
  onEdit(id: number) {
    console.log("id project manager from edit button: " + id);
    this.idProjectManager = id.toString();
    this.displayEditPopUp = 'true';
    this.displayDeletePopUp = 'false';
    localStorage.setItem('idProjectManager', this.idProjectManager);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    this.onCreate();
  }
  onDelete(id: number, firstname: string, lastname: string) {

    console.log("id project manager from edit button: " + id);
    this.idProjectManager = id.toString();
    this.displayEditPopUp = 'false';
    this.displayDeletePopUp = 'true';
    localStorage.setItem('idProjectManager', this.idProjectManager);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    this.onCreate();

  }
}
