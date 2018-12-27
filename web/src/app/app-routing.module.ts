import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
  PATH    RESULT
  ''  ->  http://localhost:4200
  'auth'  ->  http://localhost:4200/auth
  'users'  ->  http://localhost:4200/users
*/
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
