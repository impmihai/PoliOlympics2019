import { Component, OnInit } from '@angular/core';
import { FormGroup, RequiredValidator, FormControl, Validators } from '@angular/forms';
import { DatabaseService, MatchScore } from 'src/app/database.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { toast } from 'angular2-materialize';
import { isNullOrUndefined } from 'util';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sports-login',
  templateUrl: './sports-login.component.html',
  styleUrls: ['./sports-login.component.scss']
})
export class SportsLoginComponent implements OnInit {
  loggedIn: boolean = false;
  matchPlaying: MatchScore = null;

  loginForm: FormGroup = new FormGroup({
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required])
  });

  scoringMatchForm: FormGroup = new FormGroup({
    'team1': new FormControl('', [Validators.required]),
    'sport': new FormControl('', [Validators.required]),
    'team2': new FormControl('', [Validators.required]),
    'match_id': new FormControl('', []),
  });

  etape: string[] = [
    'grupe',
    'sferturi',
    'semifinale',
    'finala mica',
    'finala mare'
  ]

  universities = [
    'ACS',
    'IE',
    'Energetica',
    'ETTI',
    'IMM',
    'IMST',
    'ISB',
    'Trans',
    'Aero',
    'SIM',
    'FILS',
    'FSA',
    'Medicala',
    'FAIMA'
  ];
  sports = ['Fotbal', 'Cros', 'Ștafetă', 'Șah', 'Tenis de masă', 'Tenis de câmp', 'Volei', 'Baschet', 'Tenis de picior', 'Dans Battle'];

  constructor(private authState: AngularFireAuth, private databaseService: DatabaseService, private afDb: AngularFirestore) { }

  ngOnInit() {
    this.authState.authState.subscribe(authState => {
      if (!isNullOrUndefined(authState)) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.databaseService.doLogin(this.loginForm.value['email'], this.loginForm.value['password'])
        .catch(success => {
          toast('Date gresite.');
        })
    }
  }

  async getMatchData(): Promise<MatchScore> {
    let id = [
        this.universities.indexOf(this.scoringMatchForm.value['team1']), 
        this.universities.indexOf(this.scoringMatchForm.value['team2'])]
      .sort((u, j) => u-j).join('-') + `-${this.sports.indexOf(this.scoringMatchForm.value['sport'])}-${this.scoringMatchForm.value['match_id']}`;
    console.log(id);
    let scor:MatchScore = (await this.afDb.collection('games').doc(id).get().toPromise()).data() as MatchScore;

    if (isNullOrUndefined(scor)) {
      console.log(this.universities.indexOf(this.scoringMatchForm.value['team1']));
      scor = new MatchScore();
      scor.team1 = this.universities.indexOf(this.scoringMatchForm.value['team1']);
      scor.team2 = this.universities.indexOf(this.scoringMatchForm.value['team2']);
      scor.score1 = 0;
      scor.score2 = 0;
      scor.sport = this.sports.indexOf(this.scoringMatchForm.value['sport']);
      scor.match_id = this.scoringMatchForm.value['match_id'];
      scor.lastEditor = this.authState.auth.currentUser.email;
      scor.status = "playing"
      scor.lastUpdate = firebase.firestore.FieldValue.serverTimestamp()
      console.log(scor);
    }

    return scor;
  }

  scor1(add: number) {
    this.matchPlaying.score1 += add;
    this.updateMatchData();
  }

  scor2(add: number) {
    this.matchPlaying.score2 += add;
    this.updateMatchData();
  }

  onMatchStart() {
    if (this.scoringMatchForm.valid) {
      this.getMatchData().then(a => {
        this.matchPlaying = a;
        this.updateMatchData(true);
      })
    }
  }

  updateMatchData(update_time?: boolean) {
    if (!isNullOrUndefined(this.matchPlaying)) {
      let id = [this.matchPlaying.team1, this.matchPlaying.team2].sort((u, j) => u-j).join('-') + `-${this.matchPlaying.sport}-${this.matchPlaying.match_id}`;
      this.matchPlaying.lastEditor = this.authState.auth.currentUser.email;
      if (!isNullOrUndefined(update_time))
        this.matchPlaying.lastUpdate = firebase.firestore.FieldValue.serverTimestamp();
      this.afDb.collection('games').doc(id).set({...this.matchPlaying}, { merge: true });
    }
  }

  doFinishGame() {
    this.matchPlaying.status = "end";
    this.updateMatchData();
    this.matchPlaying = null;
  }

}
