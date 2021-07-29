import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Developer } from 'src/app/core/models/developer';
import { Project } from 'src/app/core/models/project';
import { WithHoldingStatus } from 'src/app/core/models/withHoldingStatus';
import { DeveloperService } from 'src/app/core/service/developers.service';
import { PopUpDevelopersComponent } from './pop-up-developers/pop-up-developers.component';

@Component({
  selector: 'app-list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.scss']
})
export class ListDevelopersComponent implements OnInit {

  developers: Developer[] = [];
  idDeveloper = '';
  displayEditPopUp = '';
  displayDeletePopUp = '';
  role ="";

  constructor(private dialog: MatDialog,
    private developerService: DeveloperService) { }

  ngOnInit(): void {
    this.checkRole();
    this.getAll();
  }


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

  getAll() {
    this.developerService.getAll().subscribe(
      developers => {
        this.developers = developers;
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

  listProjectByDeveloper(projects : Project[]):string{
    let output = projects[0].name;
    for (let i=1;i<projects.length;i++){
      output = output+", "+projects[i].name;
    }
    return output;
  }
}
