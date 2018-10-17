import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.currentUser.pipe(
      take(1),
      map(user => !!user),
      // If the user is not signed in, upon rejecting the request
      // the router redirects to the /login page
      tap(signedIn => {
        if (!signedIn) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
