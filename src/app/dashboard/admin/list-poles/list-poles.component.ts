import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Pole } from 'src/app/core/models/pole';
import { PoleManager } from 'src/app/core/models/poleManager';
import { PoleManagerService } from 'src/app/core/service/pole-manager.service';
import { PoleService } from 'src/app/core/service/pole.service';
import { PopUpPolesComponent } from './pop-up-poles/pop-up-poles.component';

@Component({
  selector: 'app-list-poles',
  templateUrl: './list-poles.component.html',
  styleUrls: ['./list-poles.component.scss']
})
export class ListPolesComponent implements OnInit {

  idPole = '';
  idOldPoleManager = "";
  displayEditPopUp = '';
  displayDeletePopUp = '';
  poleManagers: PoleManager[] = [];
  poles: Pole[] = [];

  constructor(private dialog: MatDialog,
    private poleManagerService: PoleManagerService) { }

  ngOnInit(): void {
    this.getListPoles();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(PopUpPolesComponent, dialogConfig);
  }

  getListPoles() {
    this.poleManagerService.getAll().subscribe(
      poleManager => {
        this.poleManagers = poleManager;
      });
  }

  onEdit(idPole: number, idOldPoleManager: number) {
    this.idPole = idPole.toString();
    this.idOldPoleManager = idOldPoleManager.toString();
    this.displayEditPopUp = 'true';
    this.displayDeletePopUp = 'false';
    localStorage.setItem('idPole', this.idPole);
    localStorage.setItem('idOldPoleManager', this.idOldPoleManager);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    this.onCreate();
  }

  onDelete(idPole: number, poleName: string) {
    this.idPole = idPole.toString();
    this.displayEditPopUp = 'false';
    this.displayDeletePopUp = 'true';
    localStorage.setItem('idPole', this.idPole);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    localStorage.setItem('poleName', poleName);
    this.onCreate();
  }
}
