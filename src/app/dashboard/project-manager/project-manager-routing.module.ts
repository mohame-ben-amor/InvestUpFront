import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponent } from '../../shared-layout/welcome-page/welcome-page.component';
import { AllPoleManagersComponent } from '../admin/all-pole-managers/all-pole-managers.component';
import { AllProjectManagersComponent } from '../admin/all-project-managers/all-project-managers.component';
import { ListDevelopersComponent } from '../admin/list-developers/list-developers.component';
import { ListPolesComponent } from '../admin/list-poles/list-poles.component';
import { ListUsersComponent } from '../admin/list-users/list-users.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { PlanificationComponent } from './planification/planification.component';

const routes: Routes = [

  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' },
  { path: 'welcomepage', component: WelcomePageComponent },
  {path:'alldevelopers',component:ListDevelopersComponent},
  {path:'allpolemanagers',component:AllPoleManagersComponent},
  {path:'allprojectmanagers',component:AllProjectManagersComponent},
  {path:'allcollaborators',component:ListUsersComponent},
  {path:'myteams',component:MyTeamsComponent},
  {path:'planification',component:PlanificationComponent},
  {path:'allpoles',component:ListPolesComponent}
  /**
   * complete your paths!
   */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectManagerRoutingModule { }