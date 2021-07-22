import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPoleComponent } from './my-pole/my-pole.component';
import { AllPoleManagersComponent } from '../admin/all-pole-managers/all-pole-managers.component';
import { ListDevelopersComponent } from '../admin/list-developers/list-developers.component';
import { ListPolesComponent } from '../admin/list-poles/list-poles.component';
import { PlanificationComponent } from '../pole-manager/planification/planification.component';
import { WelcomePageComponent } from 'src/app/shared-layout/welcome-page/welcome-page.component';

const routes: Routes = [

  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' },
  { path: 'welcomepage', component: WelcomePageComponent },
  { path: 'allpolemanagers', component: AllPoleManagersComponent },
  { path: 'listdevelopers', component: ListDevelopersComponent },
  { path: 'listpoles', component: ListPolesComponent },
  { path: 'history', component: PlanificationComponent },
  { path: 'mypole', component: MyPoleComponent },
  /**
   * complete your paths!
   */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoleManagerRoutingModule { }
