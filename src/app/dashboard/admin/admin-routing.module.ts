import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPoleComponent } from './add-pole/add-pole.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { WelcomePageComponent } from '../../shared-layout/welcome-page/welcome-page.component';
import { ListPolesComponent } from './list-poles/list-poles.component';
import { AllPoleManagersComponent } from './all-pole-managers/all-pole-managers.component';
import { AllProjectManagersComponent } from './all-project-managers/all-project-managers.component';
import { ListDevelopersComponent } from './list-developers/list-developers.component';
const routes: Routes = [

  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' },
  { path: 'welcomepage', component: WelcomePageComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'addpole', component: AddPoleComponent },
  { path: 'allusers', component: ListUsersComponent },
  { path: 'allpoles', component: ListPolesComponent },
  { path: 'allpolemanagers', component: AllPoleManagersComponent },
  { path: 'allprojectmanagers', component: AllProjectManagersComponent },
  { path: 'alldevelopers', component: ListDevelopersComponent }
  /**
   * complete your paths!
   */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmindRoutingModule { }
