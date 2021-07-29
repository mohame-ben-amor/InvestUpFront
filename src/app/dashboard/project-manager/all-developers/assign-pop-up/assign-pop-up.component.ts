import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/models/project';
import { ProjectManagerService } from 'src/app/core/service/project-manager.service';
import { ProjectService } from 'src/app/core/service/project.service';

@Component({
  selector: 'app-assign-pop-up',
  templateUrl: './assign-pop-up.component.html',
  styleUrls: ['./assign-pop-up.component.scss']
})
export class AssignPopUpComponent implements OnInit {

  createForm: FormGroup;
  projects: Project[] = [];
  idDeveloper = "";
  idProjectManager ="";
  success = "";
  error = "";

  constructor(public dialogRef: MatDialogRef<AssignPopUpComponent>,
    private projectService: ProjectService,
    private projectManagerService:ProjectManagerService,
    private route: Router) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.idProjectManager = currentUser["user"]["id"];
    this.idDeveloper = localStorage.getItem("idDeveloper");
    this.initCreateForm();
    this.getAllProjects();
  }
  private initCreateForm() {
    this.createForm = new FormGroup({
      'project': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    this.createForm.reset();
    this.removeLocalStorage();
    this.dialogRef.close();
  }

  onSubmit() {
    let project = this.createForm.value.project;
    this.projectService.assignementOfDeveloper(project, +this.idDeveloper).subscribe(
      (res) => {
        console.log(res);
        this.success = "Your request has been sent successfuly ";
        setTimeout(() => {
          this.createForm.reset();
          this.dialogRef.close();
        }, 300)
        this.removeLocalStorage();
        this.reloadPage();
      },
      (error) => {
        this.error = error["error"]["message"];
      }
    )
  }

  removeLocalStorage() {
    localStorage.removeItem('idDeveloper');
  }

  getAllProjects() {

    this.projectManagerService.getAllProjectsByProjectManager(+this.idProjectManager).subscribe(
      (res) => {
        this.projects = res;
      }
    )
  }

  reloadPage() {
    let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);
  }

}
