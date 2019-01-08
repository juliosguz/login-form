import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private http: HttpClient,
    private router: Router,
    private ar: ActivatedRoute
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
          console.log('Everything is fine!');
          if (/^\/auth/i.test(this.router.url)) {
            console.log('[THEN]', this.router.url);
            // this.router.navigate(['/dashboard']);
          }
        })
        .catch(error => {
          console.log('[CATCH verify Token]', error);
          console.log('No authToken and catch error');
          // this.router.navigate(['/auth/reactive-login']);
          localStorage.removeItem('authToken');
        });
    } else {
      this.router.navigate(['/auth/reactive-login']);
    }
    return true;
  }
}
