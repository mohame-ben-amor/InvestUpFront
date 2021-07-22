import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
const routes: Routes = [

  {
    path: '', redirectTo: 'admin', pathMatch: 'full'
  },

  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdmindModule),
  },
  {
    path: 'projectmanager',
    component: ProjectManagerComponent,
    loadChildren: () =>
      import('./project-manager/project-manager.module').then((m) => m.ProjectManagerModule),
  },
  {
    path: 'polemanager',
    component: ProjectManagerComponent,
    loadChildren: () =>
      import('./pole-manager/pole-manager.module').then((m) => m.PoleManagerdModule),
  },
  {
    path: 'main',
    component: MainComponent,
  },
  /**
   * complete your paths!
   */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
