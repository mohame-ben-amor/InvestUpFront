import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared-layout/app-layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './shared-layout/app-layout/auth-layout/auth-layout.component';
import { Page404Component } from './authentication/page404/page404.component';
import { AuthGuard } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/authentication/sign-in', pathMatch: 'full' },

    ]
   },
  {
    path: 'authentication', component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
      loadChildren: () =>
        import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
