import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.http
        .get(`http://localhost:3000/auth/verify?token=${authToken}`)
        .toPromise()
        .then(data => {
          // console.log('[THEN verify Token]', data);
          this.router.navigate(['/dashboard']);
        })
        .catch(error => {
          console.log('[CATCH verify Token]', error);
        });
    }
    return true;
  }
}
