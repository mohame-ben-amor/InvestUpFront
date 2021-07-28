import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from 'src/app/core/models/developer';
import { UserStatus } from 'src/app/core/models/userStatus';
import { HistoriqueService } from 'src/app/core/service/historique.service';
import { ProjectManagerService } from 'src/app/core/service/project-manager.service';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent implements OnInit {

  idProjectManager = "";
  form: FormGroup;
  decision = ["Presential", "Remote"];
  developers: Developer[] = [];
  error = "";
  success = "";

  constructor(private projectManagerService: ProjectManagerService,
    private historiqueService: HistoriqueService) { }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.idProjectManager = currentUser["user"]["id"];
    this.getAllDevelopersByProjectManager();
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      'developer': new FormControl("", [
        Validators.required]),
      'startingdate': new FormControl("", Validators.required),
      'deadline': new FormControl("", Validators.required),
      'decision': new FormControl("", [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.form.value.decision);
    console.log(UserStatus.NOT_DEFINED);
    if (this.form.invalid) {
      return;
    } else {
      this.error = "";
      this.success = "";
      this.historiqueService
        .createPlanification(
          this.form.value.deadline,
          this.form.value.developer,
          UserStatus.NOT_DEFINED,
          this.form.value.decision,
          this.form.value.startingdate
        )
        .subscribe(
          (res) => {
            console.log(res);
            this.success = "Your request has been sent successfuly ";
            this.form.reset();
          },
          (errorMessage) => {
            console.log("Details Error " + errorMessage["error"]["message"]);
            this.error = errorMessage;
          }
        );
    }
  }

  onClear() {
    this.form.reset();
  }

  getAllDevelopersByProjectManager() {
    this.projectManagerService.getAllDevelopersByProjectManager(+this.idProjectManager).subscribe(
      (result) => {
        console.log(result.length);
        this.developers = result;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
