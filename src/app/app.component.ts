import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poliOlympics2019';

  ngOnInit(): void {
    localStorage.clear();
  }

  constructor() {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];
  }

  close() {
    this.sidenavActions.emit({ action: 'sideNav', params: ['hide'] });
  }
  open() {
    this.sidenavActions.emit({ action: 'sideNav', params: ['show'] });
  }

  facebookNav() {
    window.location.href = 'http://www.google.com';
  }

  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];
}
