import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-situatie-inscrieri',
  templateUrl: './situatie-inscrieri.component.html',
  styleUrls: ['./situatie-inscrieri.component.scss']
})
export class SituatieInscrieriComponent implements OnInit {
  persons = []
  constructor(private afDb: DatabaseService) { }

  ngOnInit() {
    this.afDb.getInscrisi().then(a => {
      this.persons = a.docs.map(doc => doc.data()).map(doc => {
        doc.sports = doc.sports.join(', ')
        return doc;
      });
      console.log(this.persons)
    })
  }

}
