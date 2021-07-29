import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Pole } from 'src/app/core/models/pole';
import { PoleManager } from 'src/app/core/models/poleManager';
import { PoleManagerService } from 'src/app/core/service/pole-manager.service';
import { PoleService } from 'src/app/core/service/pole.service';
import { PopUpEditPoleComponent } from './pop-up-edit-pole/pop-up-edit-pole.component';

@Component({
  selector: 'app-my-pole',
  templateUrl: './my-pole.component.html',
  styleUrls: ['./my-pole.component.scss']
})
export class MyPoleComponent implements OnInit {
  
  idPoleManager = ""; 
  poleManager: PoleManager;
  poleManagers: PoleManager[] = [];

  constructor(private dialog: MatDialog,
    private poleManagerService: PoleManagerService,
  ) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.idPoleManager = currentUser["user"]["id"];
    // this.getAll();
    this.getMyPole(+this.idPoleManager);
  }


  getMyPole(idPoleManager:number){
    this.poleManagerService.getById(idPoleManager).subscribe(
      (res)=>{
        this.poleManager = res;
        console.log(this.poleManager);
      }
    );
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(PopUpEditPoleComponent, dialogConfig);
  }

  onEdit(idPole: number, name: string, description: string, capacity: number, reserved: number) {
    localStorage.setItem('idPole', idPole.toString());
    localStorage.setItem('name', name);
    localStorage.setItem('description', description);
    localStorage.setItem('capacity', capacity.toString());
    localStorage.setItem('reserved', reserved.toString());
    this.onCreate()
  }

}
