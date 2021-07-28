import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Developer } from 'src/app/core/models/developer';
import { Planification } from 'src/app/core/models/planification';
import { UserStatus } from 'src/app/core/models/userStatus';
import { ProjectManagerService } from 'src/app/core/service/project-manager.service';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.scss']
})
export class MyTeamsComponent implements OnInit {

  idProjectManager = "";
  developers: Developer[] = [];
  displayCreatePopUp = "";
  displayDeletePopUp = "";

  constructor(private dialog: MatDialog,
    private projectManagerService: ProjectManagerService) {
  }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.idProjectManager = currentUser["user"]["id"];
    this.getAllDevelopersByProjectManager();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(PopUpComponent, dialogConfig);
  }

  onCreteNewProject() {
    this.displayCreatePopUp = 'true';
    this.displayDeletePopUp = 'false';
    localStorage.setItem('displayCreatePopUp', this.displayCreatePopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    this.onCreate();
  }

  onDeleteProject() {
    this.displayCreatePopUp = 'false';
    this.displayDeletePopUp = 'true';
    localStorage.setItem('displayEditPopUp', this.displayCreatePopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    this.onCreate();
  }

  getAllDevelopersByProjectManager() {
    this.projectManagerService.getAllDevelopersByProjectManager(+this.idProjectManager).subscribe(
      (result) => {
        console.log(result.length);
        this.developers = result;
      },
      (error) => {
        console.log(error);
      }
    );

  }

  getLastItemInTable(planification: Planification[]): Planification {
    const size = planification.length;
    console.log("lenght " + size);
    if (size == 0) {
      return planification[0]
    } else {
      return planification[size - 1];
    }
  }

  toString(value: string): string {
    switch (value) {
      case "NOT_DEFINED":
        return "Not defined";
      case "PRESENTIAL":
        return "Presetial";
      case "REMOTE":
        return "Remote";
    }

  }

}
