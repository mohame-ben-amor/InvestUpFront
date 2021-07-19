import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { GaugeModule } from 'angular-gauge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SidebarComponent } from './shared-layout/sidebar/sidebar.component';
import { HeaderComponent } from './shared-layout/header/header.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


import { AuthLayoutComponent } from './shared-layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './shared-layout/app-layout/main-layout/main-layout.component';
import { AuthGuard } from './core/auth-guard.service';
import { AuthService } from './core/auth.service';
import { MainComponent } from './dashboard/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    GaugeModule.forRoot(),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    NgApexchartsModule,
    HttpClientModule,
    NgbModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
