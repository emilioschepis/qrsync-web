import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router)  { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.currentUser.pipe(
      take(1),
      map(user => !(!!user)),
      // If the user is already signed in, upon rejecting the request
      // the router redirects to the / page
      tap(signedOut => {
        if (!signedOut) {
          this.router.navigate(['/']);
        }
      }),
    );
  }
}
