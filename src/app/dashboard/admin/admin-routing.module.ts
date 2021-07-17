import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPoleComponent } from './add-pole/add-pole.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { WelcomePageComponent } from '../../shared-layout/welcome-page/welcome-page.component';
const routes: Routes = [

  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' },
  { path: 'welcomepage', component: WelcomePageComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'listusers', component: ListUsersComponent },
  { path: 'addpole', component: AddPoleComponent },
  { path: 'edituser', component: EditUserComponent }

  /**
   * complete your paths!
   */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmindRoutingModule { }
