import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AdmindRoutingModule } from './admin-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ListUsersComponent } from './list-users/list-users.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AddUserComponent } from './add-user/add-user.component';
import { WelcomePageComponent } from '../../shared-layout/welcome-page/welcome-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPoleComponent } from './add-pole/add-pole.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListPolesComponent } from './list-poles/list-poles.component';
import { AllPoleManagersComponent } from './all-pole-managers/all-pole-managers.component';
import { AllProjectManagersComponent } from './all-project-managers/all-project-managers.component';
import * as Material from "@angular/material";
import { PopUpComponent } from './all-project-managers/pop-up/pop-up.component';
import { PopUpPoleManagersComponent } from './all-pole-managers/pop-up-pole-managers/pop-up-pole-managers.component';
import { PopUpPolesComponent } from './list-poles/pop-up-poles/pop-up-poles.component';
import { ListDevelopersComponent } from './list-developers/list-developers.component';
import { PopUpDevelopersComponent } from './list-developers/pop-up-developers/pop-up-developers.component';


@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent,
    WelcomePageComponent,
    AddPoleComponent,
    ListPolesComponent,
    AllPoleManagersComponent,
    AllProjectManagersComponent,
    PopUpComponent,
    PopUpPoleManagersComponent,
    PopUpPolesComponent,
    ListDevelopersComponent,
    PopUpDevelopersComponent,
  ],
  imports: [
    CommonModule,
    AdmindRoutingModule,
    NgxEchartsModule,
    PerfectScrollbarModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Material.MatDialogModule
  ],
  exports: [Material.MatDialogModule
  ],
  entryComponents:[PopUpComponent,PopUpPoleManagersComponent,PopUpPolesComponent,PopUpDevelopersComponent]
})
export class AdmindModule { }
