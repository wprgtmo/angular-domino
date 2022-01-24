import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterPageComponent } from './pages/auth-pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/auth-pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: ()=>import('./pages/dashboard-pages/dashboard-pages.module').then((m)=>m.DashboardPagesModule)
  },
  {
    path: 'admin',
    loadChildren: ()=>import('./pages/admin-pages/admin-pages.module').then((m)=>m.AdminPagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
