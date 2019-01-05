import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
/**
 PATH    RESULT
 '' -> http://localhost:4200/auth
 'login' -> http://localhost:4200/auth/login
 */
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reactive-login',
    component: ReactiveLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
