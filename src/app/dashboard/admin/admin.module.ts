import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AdmindRoutingModule } from './admin-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ListUsersComponent } from './list-users/list-users.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AddUserComponent } from './add-user/add-user.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AddPoleComponent } from './add-pole/add-pole.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent,
    WelcomePageComponent,
    AddPoleComponent,
    EditUserComponent
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
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AdmindModule {}
