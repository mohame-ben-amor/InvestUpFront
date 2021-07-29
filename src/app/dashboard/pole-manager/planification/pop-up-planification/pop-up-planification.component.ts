import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { HistoriqueService } from 'src/app/core/service/historique.service';

@Component({
  selector: 'app-pop-up-planification',
  templateUrl: './pop-up-planification.component.html',
  styleUrls: ['./pop-up-planification.component.scss']
})
export class PopUpPlanificationComponent implements OnInit {

  editForm: FormGroup;
  historyId: number;
  developerId: number;
  displayEditPopUp = "";
  decision = ["Presential", "Remote"];

  error = "";
  success = "";

  constructor(public dialogRef: MatDialogRef<PopUpPlanificationComponent>,
    private route: Router,
    private historiqueService: HistoriqueService
  ) { }

  ngOnInit(): void {

    this.historyId = +localStorage.getItem('historyId');
    this.developerId = +localStorage.getItem('developerId');
    this.displayEditPopUp = localStorage.getItem('displayEditPopUp');
    this.initForm();
  }

  private initForm() {

    this.editForm = new FormGroup({
      'dicisionMessage': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    this.editForm.reset();
    localStorage.removeItem('displayEditPopUp');
    this.dialogRef.close();
  }

  onSubmit() {
    let dicisionMessage = "";
    dicisionMessage = this.editForm.value.dicisionMessage;
    console.log("Decision from the form : " + dicisionMessage);
    if (dicisionMessage == 'Remote') {
      dicisionMessage = 'REMOTE';
    } else {
      dicisionMessage = 'PRESENTIAL';
    }
    console.log("Decision to the API : " + dicisionMessage);
    this.historiqueService.updatePoleManagerDecision(this.historyId, this.developerId, dicisionMessage).subscribe(
      (res) => {
        setTimeout(() => {
          this.success = "Your request has been sent successfuly ";
          this.editForm.reset();
          localStorage.removeItem('displayEditPopUp');
          localStorage.removeItem('historyId');
          localStorage.removeItem('developerId');
          this.dialogRef.close();

          let currentUrl = this.route.url;
          this.route.routeReuseStrategy.shouldReuseRoute = () => false;
          this.route.onSameUrlNavigation = 'reload';
          this.route.navigate([currentUrl]);
        }, 100);
      },
      (error) => {
        this.error = this.error = error["statusText"] == "Unknown Error" ? "Please check your networking" : error["error"]["message"];
        console.log(error);
      }
    )

  }


}
