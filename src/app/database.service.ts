import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { isNullOrUndefined, isNull } from 'util';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
export class MatchScore {
  team1: number;
  team2: number;
  sport: number;
  score1: number;
  score2: number;
}


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  // private _liveScoresSubject: Subject<{ [id: string]: MatchScore; }>
  private _liveScoresSubject: Subject<MatchScore[]>;
  private _liveScoreUnsubscribe: any;

  constructor(private afDb: AngularFirestore) {
    this._liveScoresSubject = new ReplaySubject(1);
  }

  public registerUser(_data: any) {
    return this.afDb.firestore.collection('participants').add(_data);
  }

  public saveContactInfo(_data: any) {
    return this.afDb.firestore.collection('contact').add(_data);
  }

  public getInscrisi() {
    return this.afDb.firestore.collection('participants').orderBy('university').get();
  }

  public getLiveScores(sport?: number): Observable<MatchScore[]> {
    if (isNullOrUndefined(this._liveScoreUnsubscribe)) {
      this._liveScoreUnsubscribe = this.afDb.firestore.collection('games').onSnapshot(data => {
        this._liveScoresSubject.next(data.docs.map(doc => doc.data() as MatchScore));
      });
    }
    if (isNullOrUndefined(sport)) {
      return this._liveScoresSubject.asObservable();
    } else {
      return this._liveScoresSubject.pipe(map(scores =>  {
        return scores.filter(score => score.sport == sport)
      }));
    }
  }
}
