import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Developer } from 'src/app/core/models/developer';
import { Project } from 'src/app/core/models/project';
import { DeveloperService } from 'src/app/core/service/developers.service';
import { ProjectManagerService } from 'src/app/core/service/project-manager.service';
import { ProjectService } from 'src/app/core/service/project.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  createForm: FormGroup;
  deleteForm: FormGroup;
  displayCreatePopUp = "";
  displayDeletePopUp = "";
  projects: Project[] = [];
  developers:Developer[]=[];
  idProjectManager = "";
  success = "";
  error = "";

  constructor(public dialogRef: MatDialogRef<PopUpComponent>,
    private projectManagerService: ProjectManagerService,
    private projectService: ProjectService,
    private developerService:DeveloperService,
    private route: Router) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.idProjectManager = currentUser["user"]["id"];
    this.displayCreatePopUp = localStorage.getItem('displayCreatePopUp');
    this.displayDeletePopUp = localStorage.getItem('displayDeletePopUp');
    this.initCreateForm();
    this.getAllProjects();
    this.getAllDevelopers();
  }
  private initCreateForm() {
    this.createForm = new FormGroup({
      'name': new FormControl("", [Validators.required,
      Validators.minLength(2)]),
      'developer':new FormControl("",Validators.required),
    });

    this.deleteForm = new FormGroup({
      'projectName': new FormControl("", Validators.required),
    })
  }

  onCancel() {
    this.createForm.reset();
    this.removeLocalStorage();
    this.dialogRef.close();
  }

  onSubmit() {
    let name = this.createForm.value.name;
    let idDeveloper = this.createForm.value.developer;
    this.projectManagerService.createProject(+this.idProjectManager, name).subscribe((res) => {
      if (res) {
        let idProject = res.id;
        this.projectManagerService.updateProjectsList(+this.idProjectManager, idProject).subscribe(
          (res) => {
            console.log("Done boy ! ");
          },
          (error) => {
            this.error = "Please check your networking";
          }
        );
        this.projectService.assignementOfDeveloper(idProject,idDeveloper).subscribe(
          (res)=>{
            console.log(res.name);
            this.success = "Your request has been sent successfuly ";
          },
          (error)=>{
            this.error = error["error"]["message"];
          }
        ),
        this.success = "Your request has been sent successfuly ";
        setTimeout(() => {
          this.createForm.reset();
          this.dialogRef.close();
        }, 300)
        this.removeLocalStorage();
        this.reloadPage();
      }
    },
      (error) => {
        this.error = error["statusText"] == "Unknown Error" ? "Please check your networking" : error["error"]["message"];
        this.reloadPage();
      });
  }

  onDelete() {
    let id = this.deleteForm.value.projectName;
    console.log("id element selicnoee : " + id);
    this.projectService.delete(+id).subscribe(
      (res) => {
        this.success = "Your request has been sent successfuly ";
        setTimeout(() => {
          this.dialogRef.close();
          this.removeLocalStorage();
        }, 300)
        this.removeLocalStorage();
      },
      (error) => {
        console.log(error);
        console.log("Error");
        this.error = "Please check your networking";
        let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate([currentUrl]);
      }
    );
  }

  removeLocalStorage() {
    localStorage.removeItem('displayCreatePopUp');
    localStorage.removeItem('displayDeletePopUp');
  }

  getAllProjects() {
    this.projectManagerService.getAllProjectsByProjectManager(+this.idProjectManager).subscribe(
      (res) => {
        this.projects = res;
      }
    )
  }

  getAllDevelopers(){
    this.developerService.getAll().subscribe(
      (result)=>{
        this.developers = result;
      }
    )
  }

  reloadPage(){
    let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);
  }

}
