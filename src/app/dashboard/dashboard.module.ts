import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxEchartsModule,
    PerfectScrollbarModule,
    NgApexchartsModule
  ],
})
export class DashboardModule {}
