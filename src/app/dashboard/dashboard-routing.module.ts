import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
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
    path: 'investor',
    loadChildren: () =>
      import('./investor/invertor.module').then((m) => m.InvestorModule),
  },
  {
    path: 'entrepreneur',
    loadChildren: () =>
      import('./entrepreneur/entrepreneur.module').then((m) => m.EntrepreneurModule),
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
