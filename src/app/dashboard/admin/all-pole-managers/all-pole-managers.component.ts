import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PoleManager } from 'src/app/core/models/poleManager';
import { UserStatus } from 'src/app/core/models/userStatus';
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
  
 // poleManagers: PoleManager[] = [new PoleManager(1, "Rayen", "CEHRNI", "222222222", "roro@cherni", "abdlahmid", "dev dev", UserStatus.REMOTE),
  //new PoleManager(2, "BEN amor", "Hama", "222222222", "rayen@cherni", "abdlahmid", "dev marketing", UserStatus.PRESENTIAL)];
  poleManagers: PoleManager[]=[];

  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];

  idPoleManager = '';
  displayEditPopUp = '';
  displayDeletePopUp = '';

  constructor(private dialog: MatDialog, 
    private adminService: AdminService,
    private poleManagerService: PoleManagerService) {

   }

  ngOnInit(): void {
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

  onDelete(id: number,firstname:string,lastname:string) {

    this.idPoleManager = id.toString();
    this.displayEditPopUp = 'false';
    this.displayDeletePopUp = 'true';
    localStorage.setItem('idPoleManager', this.idPoleManager);
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    localStorage.setItem('displayDeletePopUp', this.displayDeletePopUp);
    localStorage.setItem('firstname',firstname);
    localStorage.setItem('lastname',lastname);
    this.onCreate();

  }


  getAllPoleManagers() {
    this.poleManagerService.getAll().subscribe(
      poleManager => {
        this.poleManagers = poleManager;
      });
  }
}
