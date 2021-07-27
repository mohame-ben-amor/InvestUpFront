import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PoleManager } from 'src/app/core/models/poleManager';
import { UserStatus } from 'src/app/core/models/userStatus';
import { WithHoldingStatus } from 'src/app/core/models/withHoldingStatus';
import { AdminService } from 'src/app/core/service/admin.service';
import { PoleManagerService } from 'src/app/core/service/pole-manager.service';
import { PopUpPoleManagersComponent } from './pop-up-pole-managers/pop-up-pole-managers.component';

@Component({
  selector: 'app-all-pole-managers',
  templateUrl: './all-pole-managers.component.html',
  styleUrls: ['./all-pole-managers.component.scss'],

})
export class AllPoleManagersComponent implements OnInit {

  closeResult: string;
  editForm: FormGroup;
  poleManagers: PoleManager[] = [];
  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];
  idPoleManager = '';
  displayEditPopUp = '';
  displayDeletePopUp = '';
  role ="";

  constructor(private dialog: MatDialog,
    private poleManagerService: PoleManagerService) {

  }

  ngOnInit(): void {
    this.checkRole();
    this.getAllPoleManagers();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(PopUpPoleManagersComponent, dialogConfig);
  }

  onEdit(id: number) {
    this.idPoleManager = id.toString();
    this.displayEditPopUp = 'true';
    this.displayDeletePopUp = 'false';
    localStorage.setItem('idPoleManager', this.idPoleManager);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    this.onCreate();
  }

  onDelete(id: number, firstname: string, lastname: string) {
    this.idPoleManager = id.toString();
    this.displayEditPopUp = 'false';
    this.displayDeletePopUp = 'true';
    localStorage.setItem('idPoleManager', this.idPoleManager);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    this.onCreate();
  }


  getAllPoleManagers() {
    this.poleManagerService.getAll().subscribe(
      poleManager => {
        this.poleManagers = poleManager;
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
