import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

/**
  PATH    RESULT
  ''  ->  http://localhost:4200
  'auth'  ->  http://localhost:4200/auth
  'auth/login'  ->  http://localhost:4200/auth/login
  'users'  ->  http://localhost:4200/users
*/
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
