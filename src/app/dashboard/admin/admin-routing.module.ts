import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
const routes: Routes = [

  { path: '', redirectTo: 'welcomepage', pathMatch: 'full'},
  { path:'welcomepage', component:WelcomePageComponent},
  { path:'adduser', component:AddUserComponent},
  { path:'listusers', component:ListUsersComponent},
  
  /**
   * complete your paths!
   */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmindRoutingModule {}
