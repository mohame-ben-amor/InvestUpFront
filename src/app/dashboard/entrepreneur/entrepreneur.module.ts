import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EntrepreneurRoutingModule } from './entrepreneur-routing.module';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as Material from "@angular/material";
import { MyProjectsComponent } from './my-projects/my-projects.component';

@NgModule({
  declarations: [

  MyProjectsComponent],
  imports: [
    CommonModule,
    EntrepreneurRoutingModule,
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
    Material.MatDialogModule,
    Material.MatDatepickerModule,
    Material.MatFormFieldModule,
    Material.MatNativeDateModule,
    Material.MatInputModule,
  ],
  exports: [Material.MatDialogModule,
    Material.MatFormFieldModule,
    Material.MatInputModule],
})
export class EntrepreneurModule { }
