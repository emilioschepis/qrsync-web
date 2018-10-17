import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  listenToValueChanges(reference, field: string): Observable<{}[]> {
    const collection = this.firestore.collection(reference, query => {
      return query.orderBy(field, 'desc');
    });
    return collection.valueChanges();
  }

  deleteDocument(reference): Observable<void> {
    const document = this.firestore.doc(reference);
    return from(document.delete()).pipe(take(1));
  }

  updateDocument(reference, update: {}): Observable<void> {
    const document = this.firestore.doc(reference);
    return from(document.update(update)).pipe(take(1));
  }
}
