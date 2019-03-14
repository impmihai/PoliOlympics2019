import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afDb: AngularFirestore) { }

  public registerUser(_data: any) {
    return this.afDb.firestore.collection('participants').add(_data);
  }
}
