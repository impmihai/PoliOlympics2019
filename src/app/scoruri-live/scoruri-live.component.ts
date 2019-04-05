import { Component, OnInit } from '@angular/core';
import { DatabaseService, MatchScore } from '../database.service';
import { NguCarousel, NguCarouselStore } from '@ngu/carousel';
import { matchesElement } from '@angular/animations/browser/src/render/shared';

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

  matches: MatchScore[] = null;
  displayMatches: MatchScore[];
  ngOnInit() {
    this.dataService.getLiveScores().subscribe(scores => this.matches = scores);
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

  

  onmoveFn(data: NguCarouselStore) {
    console.log(data);
  }
}

