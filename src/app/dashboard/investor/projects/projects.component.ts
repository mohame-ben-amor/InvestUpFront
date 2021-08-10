
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project';
import { User } from 'src/app/core/models/user';
import { ProjectService } from 'src/app/core/service/project.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  user: User;
  constructor(private projectService: ProjectService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
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
    this.projectService.getAllProjects().subscribe(
      (succ) => {
        console.log(succ);
        this.projects = succ;
      }
    )
  }

}
