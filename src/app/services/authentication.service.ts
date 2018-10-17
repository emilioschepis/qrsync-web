import { Injectable, isDevMode } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from, throwError } from 'rxjs';
import { take, tap, catchError, map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,
    private router: Router) {
    this.currentUser = firebaseAuth.user;
  }

  getCurrentUserEmail(): Observable<string> {
    return this.currentUser.pipe(
      map(user => user ? user.email : '')
    );
  }

  signInWithEmailAndPassword(email: string, password: string): Observable<firebase.auth.UserCredential> {
    // Starting from the default firebase promise, this method creates
    // an observable that signs an user with email and password.
    // The take(1) operator ensures that the observable is correctly disposed
    // after the first event is emitted.
    return from(this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)).pipe(
      take(1),
      tap((credentials) => {
        if (isDevMode()) {
          console.log('[AUTH] Correctly signed in.', credentials.user.uid);
        }
        // After a successful sign in, send the user to the content page
        this.router.navigate(['/']);
      }),
      catchError((error) => {
        if (isDevMode()) {
          console.error('[AUTH] Error signing in. ' + error.message, error.code);
        }
        return throwError(error);
      })
    );
  }

  signInWithGoogle(): Observable<firebase.auth.UserCredential> {
    // Starting from the default firebase promise, this method creates
    // an observable that signs an user with Google.
    // The take(1) operator ensures that the observable is correctly disposed
    // after the first event is emitted.
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    });

    return from(this.firebaseAuth.auth.signInWithPopup(provider)).pipe(
      take(1),
      tap((credentials) => {
        if (isDevMode()) {
          console.log('[AUTH] Correctly signed in with Google.', credentials.user.uid);
        }
        // After a successful sign in, send the user to the content page
        this.router.navigate(['/']);
      }),
      catchError((error) => {
        if (isDevMode()) {
          console.error('[AUTH] Error signing in with Google. ' + error.message, error.code);
        }
        return throwError(error);
      })
    );
  }

  signOut() {
    // Starting from the default firebase promise, this method
    // signs out an user.
    // The take(1) operator ensures that the observable is correctly disposed
    // after the first event is emitted.
    return from(this.firebaseAuth.auth.signOut()).pipe(
      take(1),
      tap(() => {
        if (isDevMode()) {
          console.log('[AUTH] Correctly signed out.');
        }
        // After a successful sign out, send the user to the login page
        this.router.navigate(['/login']);
      }),
      catchError((error) => {
        if (isDevMode()) {
          console.error('[AUTH] Error signing out. ' + error.message, error.code);
        }
        return throwError(error);
      })
    );
  }
}
