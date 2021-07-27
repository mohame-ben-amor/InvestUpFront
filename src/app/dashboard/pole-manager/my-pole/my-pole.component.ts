import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Pole } from 'src/app/core/models/pole';
import { PopUpEditPoleComponent } from './pop-up-edit-pole/pop-up-edit-pole.component';

@Component({
  selector: 'app-my-pole',
  templateUrl: './my-pole.component.html',
  styleUrls: ['./my-pole.component.scss']
})
export class MyPoleComponent implements OnInit {
  
  poles : Pole[]=[];

  constructor(private dialog: MatDialog) {}
  
  ngOnInit(): void {   
  }

  onCreate() {
   const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.width = '40%';
   this.dialog.open(PopUpEditPoleComponent, dialogConfig);
 }


 
 onEdit(idPole: number) {

   localStorage.setItem('idPole',idPole.toString() );
   console.log("id POle from componenet "+ idPole);
   this.onCreate()
 }

}
