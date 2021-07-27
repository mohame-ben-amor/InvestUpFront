import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { PopUpComponent } from './pop-up/pop-up.component';
import { WithHoldingStatus } from 'src/app/core/models/withHoldingStatus';
import { Project } from 'src/app/core/models/project';
import { ProjectService } from 'src/app/core/service/project.service';

@Component({
  selector: 'app-all-project-managers',
  templateUrl: './all-project-managers.component.html',
  styleUrls: ['./all-project-managers.component.scss']
})
export class AllProjectManagersComponent implements OnInit {

  projects: Project[] = [];
  idProjectManager = '';
  displayEditPopUp = '';
  displayDeletePopUp = '';
  role ="";

  constructor(private dialog: MatDialog,
    private projectService : ProjectService) { }

  ngOnInit(): void {
    this.checkRole();
    this.getAll();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(PopUpComponent, dialogConfig);
  }

  onEdit(id: number) {
    this.idProjectManager = id.toString();
    this.displayEditPopUp = 'true';
    this.displayDeletePopUp = 'false';
    localStorage.setItem('idProjectManager', this.idProjectManager);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    this.onCreate();
  }

  onDelete(id: number, firstname: string, lastname: string) {
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

  getAll() {
    this.projectService.getAll().subscribe(
      projects => {
        this.projects = projects;
      });
  }


  toString(value: string): string {
    switch (value) {
      case "IN_VACATION":
        return WithHoldingStatus.IN_VACATION;
      case "SICK_DAYS":
        return WithHoldingStatus.SICK_DAYS;

      case "SUSPENSION":
        return WithHoldingStatus.SUSPENSION;
      case "NONE":
        return WithHoldingStatus.NONE;
    }
  }

  checkRole() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.role = currentUser["user"]["role"]["roleName"];
  }
}
