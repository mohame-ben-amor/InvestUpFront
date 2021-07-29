import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Developer } from 'src/app/core/models/developer';
import { Project } from 'src/app/core/models/project';
import { UserStatus } from 'src/app/core/models/userStatus';
import { WithHoldingStatus } from 'src/app/core/models/withHoldingStatus';
import { DeveloperService } from 'src/app/core/service/developers.service';
import { AssignPopUpComponent } from './assign-pop-up/assign-pop-up.component';

@Component({
  selector: 'app-all-developers',
  templateUrl: './all-developers.component.html',
  styleUrls: ['./all-developers.component.scss']
})
export class AllDevelopersComponent implements OnInit {

  developers: Developer[] = [];
  idDeveloper = '';

  constructor(private dialog: MatDialog,
    private developerService: DeveloperService) { }

  ngOnInit(): void {
    this.getAll();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(AssignPopUpComponent, dialogConfig);
  }

  onEdit(id: number) {
    this.idDeveloper = id.toString();
    localStorage.setItem('idDeveloper', this.idDeveloper);
    this.onCreate();
  }

  getAll() {
    this.developerService.getAll().subscribe(
      developers => {
        console.log(developers);
        this.developers = developers;
      });
  }

  listProjectByDeveloper(projects : Project[]):string{
    let output = projects[0].name;
    for (let i=1;i<projects.length;i++){
      output = output+", "+projects[i].name;
    }
    return output;
  }
  
  toStringStatus(value: string): string {
    switch (value) {
      case "NOT_DEFINED":
        return UserStatus.NOT_DEFINED;
      case "PRESENTIAL":
        return UserStatus.PRESENTIAL ;

      case "REMOTE":
        return UserStatus.REMOTE;
    }
  }

  toStringWithHolding(value: string): string {
    switch (value) {
      case "NONE":
        return WithHoldingStatus.NONE;
      case "SICK_DAYS":
        return WithHoldingStatus.SICK_DAYS;
      case "IN_VACATION":
        return WithHoldingStatus.IN_VACATION;
        case "SUSPENSION":
        return WithHoldingStatus.SUSPENSION
    }
  }

}
