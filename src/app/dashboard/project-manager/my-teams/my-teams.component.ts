import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Developer } from 'src/app/core/models/developer';
import { ProjectManagerService } from 'src/app/core/service/project-manager.service';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.scss']
})
export class MyTeamsComponent implements OnInit {

  idProjectManager = "";
  developers: Developer[][] = [[]];
  devs: Developer[];
  displayCreatePopUp = "";
  displayDeletePopUp = "";

  constructor(private dialog: MatDialog,
    private projectManagerService: ProjectManagerService) { }

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
        for (let i = 0; i < result.length; i++) {
          console.log(result[i]);
        }
        this.developers = result;
        this.getDev(this.developers);
      },
      (error) => {
        console.log(error);
      }
    );

  }

  getDev(value: Developer[][]) {
    for (let i = 0; i < value.length; i++) {
      console.log("dev "+i+" lenght : "+value[i].length);
      this.devs = value[i];
    }
  }
}
