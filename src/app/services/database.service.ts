import { Injectable, isDevMode } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { FirestoreService } from './firestore.service';
import { Observable, throwError, of } from 'rxjs';
import { map, switchMap, catchError, tap, take, takeWhile } from 'rxjs/operators';
import { Code } from '../model/code';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private authenticationService: AuthenticationService,
    private firestoreService: FirestoreService) { }

  getCodes(): Observable<Code[]> {
    return this.authenticationService.currentUser.pipe(
      // Maps the uid to the corresponding codes collection
      takeWhile(user => user != null),
      map(user => `users/${user.uid}/codes`),
      tap(ref => {
        if (isDevMode()) {
          console.log('[DB] Beginning to listen for changes.', ref);
        }
      }),
      // Uses the generated reference to start a database listener
      switchMap(ref => {
        return ref ? this.firestoreService.listenToValueChanges(ref, 'timestamp') : of([]);
      }),
      map(results => results as Code[]),
      catchError(error => {
        if (isDevMode()) {
          console.error('[DB] Error loading codes. ' + error.message, error.code);
        }
        return of([]);
      })
    );
  }

  deleteCode(id: string): Observable<void> {
    return this.authenticationService.currentUser.pipe(
      // Maps the user to its uid.
      map(user => user ? user.uid : throwError('User is not signed in.')),
      // Maps the uid to the corresponding code document
      map(uid => `users/${uid}/codes/${id}`),
      // Uses the generated reference to delete the document
      switchMap(ref => {
        return this.firestoreService.deleteDocument(ref);
      }),
      take(1),
      tap(() => {
        if (isDevMode()) {
          console.log('[DB] Deleted code.', id);
        }
      }),
      catchError(error => {
        if (isDevMode()) {
          console.error('[DB] Error deleting code. ' + error.message, error.code);
        }
        return throwError(error);
      })
    );
  }

  updateCodeTitle(id: string, title: string): Observable<void> {
    return this.authenticationService.currentUser.pipe(
      // Maps the user to its uid.
      map(user => user ? user.uid : throwError('User is not signed in.')),
      // Maps the uid to the corresponding code document
      map(uid => `users/${uid}/codes/${id}`),
      // Uses the generated reference to delete the document
      switchMap(ref => {
        return this.firestoreService.updateDocument(ref, { title: title });
      }),
      take(1),
      tap(() => {
        if (isDevMode()) {
          console.log('[DB] Updated code.', id);
        }
      }),
      catchError(error => {
        if (isDevMode()) {
          console.error('[DB] Error updating code. ' + error.message, error.code);
        }
        return throwError(error);
      })
    );
  }
}
