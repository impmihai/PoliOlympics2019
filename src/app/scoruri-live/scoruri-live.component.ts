import { Component, OnInit } from '@angular/core';
import { DatabaseService, MatchScore } from '../database.service';
import { matchesElement } from '@angular/animations/browser/src/render/shared';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-scoruri-live',
  templateUrl: './scoruri-live.component.html',
  styleUrls: ['./scoruri-live.component.scss']
})
export class ScoruriLiveComponent implements OnInit {

  currentSport = 0;
  constructor(private dataService: DatabaseService) { }
  
  facultati = [
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
  ]

  sports = ['Fotbal',
  'Cros',
  'Ștafetă',
  'Șah',
  'Tenis de masă',
  'Tenis de câmp',
  'Volei',
  'Baschet',
  'Tenis cu piciorul',
  'Dans Battle'];

  getScoresForEtapa(etapa: string): MatchScore[] {
    if (!isNullOrUndefined(this.displayMatches)) {
      console.log(this.displayMatches);
      return this.displayMatches.filter(match => match.match_id.toLocaleLowerCase() == etapa.toLocaleLowerCase());
    } 
  }

  etape: string[] = [
    'finala mare',
    'finala mica',
    'semifinale',
    'sferturi',
    'grupe'
  ]

  matches: MatchScore[] = null;
  displayMatches: MatchScore[];
  ngOnInit() {
    this.dataService.getLiveScores().subscribe(scores => {
      this.matches = scores
      this.displayMatches = this.matches.filter(match => match.sport == this.currentSport)      
    });
    setInterval(() => {
      this.currentSport ++;
      console.log("interval");
      if (this.matches.length) {
        while (this.matches.filter(match => match.sport == this.currentSport).length == 0) {
          this.currentSport ++;
          if (this.currentSport == this.sports.length) {
            this.currentSport = 0;
          }
        }
      }
      this.displayMatches = this.matches.filter(match => match.sport == this.currentSport)
    }, 10000);
  }
}

