import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  email = null;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.email = null;
    this._router.navigate(['login']);
  }

}
