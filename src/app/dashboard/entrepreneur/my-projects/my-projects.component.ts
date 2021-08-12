import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/models/project';
import { User } from 'src/app/core/models/user';
import { ProjectService } from 'src/app/core/service/project.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  projects: Project[] = [];
  user: User;
  project: Project;
  form: FormGroup;

  error = "";
  success = "";

  id = null;
  name = "";
  description = "";
  logo = "";
  achievement = "";

  count: number = 0;

  constructor(private projectService: ProjectService,
    private userService: UserService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
    this.initForm();
  }

  getOwner(id) {
    this.userService.getUser(id).subscribe(
      (res) => {
        this.user = res;
        console.log(this.user);
      }
    )
  }

  getAllProjects() {
    this.projectService.getMyProjects().subscribe(
      (succ) => {
        console.log(succ);
        this.projects = succ;
      }
    )
  }

  private initForm() {
    this.form = new FormGroup({
      'name': new FormControl("", [
        Validators.required,
        Validators.minLength(2)]),
      'description': new FormControl("", [Validators.required, Validators.minLength(5)]),
      'logo': new FormControl("", [Validators.required,
      Validators.minLength(5)]),
      'achievement': new FormControl("", [Validators.required]),
    });
  }

  onSubmit() {
    this.project = this.form.getRawValue();
    this.error = "";
    this.success = "";
    console.log(this.project);
    console.log("id project man: " + this.id);
    if (this.project.name != "") {
      console.log(this.user);
      this.name = this.user.name.toString();
      this.projectService.editName(this.id, this.name).subscribe();
      setTimeout(() => {
        this.count++;
      }, 50);
    }

    if (this.project.description != "") {
      this.description = this.project.description.toString();
      this.projectService.editDescription(this.id, this.description).subscribe();

      setTimeout(() => {
        this.count++;
      }, 100);
    }
    if (this.project.logo.toString() != "") {
      this.logo = this.project.logo.toString();
      this.projectService.editLogo(this.id, this.logo).subscribe();
      setTimeout(() => {
        this.count++;
      }, 150);
    }
    if (this.project.achievement.toString() != "") {
      this.achievement = this.project.achievement.toString();
      this.projectService.editAchievement(this.id, this.achievement).subscribe();
      setTimeout(() => {
        this.count++;
      }, 200);

    }
    setTimeout(() => {
      if (this.count > 0) {
        this.success = "Your request has been sent successfuly ";
      } else {
        this.error = "Please check your networking";
      }
    }, 300);
    setTimeout(() => {

      this.form.reset();
      let currentUrl = this.route.url;
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate([currentUrl]);
    }, 500);
  }

  onClear() {
    this.form.reset();
  }

  getInfo(id: number, name: string, description: string, logo: string, achievement: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.logo = logo;
    this.achievement = achievement;
    console.log(achievement);
  }

}
