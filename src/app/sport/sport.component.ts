import { Component,
   OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  id: number;
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
  rules = [`Rule Fotbal`,
   `Rule Cros`,
  `Rule Ștafetă`,
  `Rule Șah`,
  `Rule Tenis de masă`,
  `Rule Tenis de câmp`,
  `Rule Volei`,
  `Rule Baschet`,
  `Rule Tenis cu piciorul`,
  `Rule Dans Battle`];
  descriptions = [`Desc Fotbal`,
   `Desc Cros`,
  `Desc Ștafetă`,
  `Desc Șah`,
  `Desc Tenis de masă`,
  `Desc Tenis de câmp`,
  `Desc Volei`,
  `Desc Baschet`,
  `Desc Tenis cu piciorul`,
  `Desc Dans Battle`];
  images = ['../../assets/images/fotbal.svg',
   '../../assets/images/alergat.svg',
   '../../assets/images/sah.svg',
   '../../assets/images/pingPong.svg',
   '../../assets/images/tenis.svg',
   '../../assets/images/volei.svg',
   '../../assets/images/baschet.svg',
   '../../assets/images/fotbal.svg',
   '../../assets/images/dans.svg']

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    })
  }
}
