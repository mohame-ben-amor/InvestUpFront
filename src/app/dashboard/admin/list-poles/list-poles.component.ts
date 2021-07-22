import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Pole } from 'src/app/core/models/pole';
import { PopUpPolesComponent } from './pop-up-poles/pop-up-poles.component';

@Component({
  selector: 'app-list-poles',
  templateUrl: './list-poles.component.html',
  styleUrls: ['./list-poles.component.scss']
})
export class ListPolesComponent implements OnInit {


  poles = [new Pole(1, "Dev", "HAMA Hama", "BLA", 33, 4)];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  idPole = '';
  displayEditPopUp = '';
  displayDeletePopUp = '';

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(PopUpPolesComponent, dialogConfig);
  }

  onEdit(id: number) {
    console.log("id pole from edit button: " + id);
    this.idPole = id.toString();
    this.displayEditPopUp = 'true';
    this.displayDeletePopUp = 'false';
    localStorage.setItem('idPole', this.idPole);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    this.onCreate();
  }

  onDelete(id: number, poleName: string) {
    console.log("id project manager from edit button: " + id);
    this.idPole = id.toString();
    this.displayEditPopUp = 'false';
    this.displayDeletePopUp = 'true';
    localStorage.setItem('idPole', this.idPole);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    localStorage.setItem('poleName', poleName);
    this.onCreate();
  }
}
