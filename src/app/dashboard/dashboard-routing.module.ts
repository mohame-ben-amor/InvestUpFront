import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'admin', pathMatch: 'full'
  },
  {
    path:'admin',
    component:AdminComponent,
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
export class DashboardRoutingModule {}
