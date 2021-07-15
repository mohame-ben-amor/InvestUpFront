import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'listusers', pathMatch: 'full'
  },
  {
    path:'listusers',
    component:ListUsersComponent,
    
  },
  
  /**
   * complete your paths!
   */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmindRoutingModule {}
