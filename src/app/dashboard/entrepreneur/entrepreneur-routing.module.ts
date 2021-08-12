import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from 'src/app/shared-layout/welcome-page/welcome-page.component';

import { EditProfileComponent } from '../investor/edit-profile/edit-profile.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

const routes: Routes = [

  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' },
  { path: 'welcomepage', component: WelcomePageComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'projects', component: MyProjectsComponent },
  /**
   * complete your paths!
   */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrepreneurRoutingModule { }