import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactFormGroup = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'message': new FormControl(null, Validators.required)
  });
  constructor(private _db: DatabaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.contactFormGroup.valid) {
      const response = {
        email: this.contactFormGroup.get('email').value,
        message: this.contactFormGroup.get('message').value
      };
      this._db.saveContactInfo(response).then(success => {
        toast('Mesaj trimis cu succes!');
        this.contactFormGroup.markAsUntouched();
        this.contactFormGroup.reset();
      }).catch(fail => {
        toast('A apărut o eroare. Te rog verifică datele sau contactează-ne pe altă cale dacă eroarea persistă.');
      });
    } else {
      this.contactFormGroup.markAsTouched();
    }
  }
}
