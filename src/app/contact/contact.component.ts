import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactFormGroup = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'message': new FormControl(null, Validators.required),
    'name': new FormControl(null, Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.contactFormGroup.valid) {
      const response = {
        email: this.contactFormGroup.get('email').value,
        message: this.contactFormGroup.get('message').value
        name: this.contactFormGroup.get('name').value
      };
      console.log(response);
    }
  }

}
