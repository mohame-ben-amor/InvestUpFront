import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Developer } from 'src/app/core/models/developer';
import { UserStatus } from 'src/app/core/models/userStatus';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.scss']
})
export class MyTeamsComponent implements OnInit {


  public developers = [
    new Developer(1, "rayen", "baabba", "2222", "rayen@", "ddddd", ["le mayekhdemshhahahahaha"], UserStatus.PRESENTIAL),
    new Developer(1, "alaa", "baabba", "2222", "rayen@", "ddddd", ["le mayekhdemshhahahahaha"], UserStatus.REMOTE)
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }
  displayCreatePopUp = "";
  displayDeletePopUp = "";

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
    console.log("heeeeey ")
    this.displayCreatePopUp = 'false';
    this.displayDeletePopUp = 'true';
    localStorage.setItem('displayEditPopUp', this.displayCreatePopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    this.onCreate();
  }
}
