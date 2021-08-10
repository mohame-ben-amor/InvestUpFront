import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AdminComponent } from './admin/admin.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { InvestorComponent } from './investor/investor.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';
import { EditProfileComponent } from './investor/edit-profile/edit-profile.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Material from "@angular/material";
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AdminComponent,
    InvestorComponent,
    EntrepreneurComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
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
    ReactiveFormsModule,
    Material.MatDialogModule,
    Material.MatDatepickerModule,
    Material.MatFormFieldModule,
    Material.MatNativeDateModule,
    Material.MatInputModule
  ],
  exports: [
    Material.MatDialogModule,
    Material.MatFormFieldModule,
    Material.MatInputModule
  ],
})
export class DashboardModule {}
