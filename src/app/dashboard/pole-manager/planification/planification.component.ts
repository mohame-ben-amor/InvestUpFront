import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopUpPlanificationComponent } from './pop-up-planification/pop-up-planification.component';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent implements OnInit {


  closeResult: string;
  editForm: FormGroup;
  idHistory :number;
  displayEditPopUp = '';

  objIndex : any;
  decision = '' ;
  histories = [
    {
      id: 1,
      developerName: 'rayen',
      startingDate: '09-09-2021',
      deadline: '10-10-2021',
      projectManagerDecision: 'projectManagerDecision1',
      poleManagerDecision: 'poleManagerDecision1'
    },
    {
      id: 2,
      developerName: 'mohamed',
      startingDate: '02-02-2021',
      deadline: '03-03-2021',
      projectManagerDecision: 'projectManagerDecision2',
      poleManagerDecision: 'poleManagerDecision2'
      },
    ] ;

  constructor(private dialog: MatDialog) {
    
   }
   onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(PopUpPlanificationComponent, dialogConfig);
  }

  ngOnInit(): void {
    
    this.decision = localStorage.getItem('decision');
    this.idHistory = +localStorage.getItem('idHistory');
    console.log(this.histories);

    this.objIndex = this.histories.findIndex((obj => obj.id == +this.idHistory));
    this.histories[this.objIndex].poleManagerDecision = this.decision;
    console.log(this.histories);
    
  }
  
  onEdit(id: number) {
    console.log("id History from edit button: " + id);
    console.log(this.histories[id-1].poleManagerDecision);
    this.idHistory = id;
    this.displayEditPopUp = 'true';
    localStorage.setItem('idHistory', this.idHistory.toString());
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    console.log(this.idHistory);
    this.onCreate()
  }

}
