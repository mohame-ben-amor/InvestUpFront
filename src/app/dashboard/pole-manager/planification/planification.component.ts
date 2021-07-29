import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Developer } from 'src/app/core/models/developer';
import { Planification } from 'src/app/core/models/planification';
import { DeveloperService } from 'src/app/core/service/developers.service';
import { PopUpPlanificationComponent } from './pop-up-planification/pop-up-planification.component';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent implements OnInit {

  closeResult: string;
  editForm: FormGroup;
  idHistory: number;
  displayEditPopUp = '';
  histories: History[] = [];
  developers: Developer[] = [];
  objIndex: any;
  decision = '';

  constructor(private dialog: MatDialog,
    private developerService: DeveloperService
  ) { }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(PopUpPlanificationComponent, dialogConfig);
  }

  ngOnInit(): void {
    this.getAll();
    this.decision = localStorage.getItem('decision');
    this.idHistory = +localStorage.getItem('idHistory');

    this.developers.forEach(function (value) {
      console.log(value);
    });
  }

  getLastItemInTable(planification: Planification[]): Planification {
    const size = planification.length;
    if (size == 0) {
      return planification[0]
    } else {
      return planification[size - 1];
    }
  }
  
  getAll() {
    this.developerService.getAll().subscribe((res) => {
      this.developers = res;
      console.log(this.developers);
    });
    setTimeout(() => {
    }, 300)
  }

  onEdit(HistoryId: number, developerId: number) {
    this.displayEditPopUp = 'true';
    localStorage.setItem('developerId', developerId.toString());
    localStorage.setItem('historyId', HistoryId.toString());
    localStorage.setItem('displayEditPopUp', this.displayEditPopUp);
    this.onCreate()
  }

  toStringValue(value: string): string {
    switch (value) {
      case "NOT_DEFINED":
        return "Not defined";
      case "PRESENTIAL":
        return "Presential";
      case "REMOTE":
        return "Remote";
    }

  }

}
