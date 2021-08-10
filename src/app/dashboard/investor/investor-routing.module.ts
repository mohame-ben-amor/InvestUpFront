import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from 'src/app/shared-layout/welcome-page/welcome-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [

  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' },
  { path: 'welcomepage', component: WelcomePageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'edit-profile', component: EditProfileComponent },

  /**
   * complete your paths!
   */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestorRoutingModule { }
