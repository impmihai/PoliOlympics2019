import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup = new FormGroup({
    'lastname': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'firstname': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'university': new FormControl(null, Validators.required),
    'facebookUrl': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'phone': new FormControl(null, Validators.required),
    'captain': new FormControl('false'),
    'captainRecommendation': new FormControl(null),
    'sports': new FormArray([], [Validators.required, this.sportsValidator.bind(this)]),
    'comments': new FormControl(null),
    'gdpr': new FormControl(false),
  });
  showCaptainRecommendation = false;
  universities = ['Facultatea de Automatică și Calculatoare', 'Facultatea de Inginerie Electrică', 'Facultatea de Energetică', 'Facultatea de Electronică, Telecomunicații și Tehnologia Informației', 'Facultatea de Inginerie Mecanică și Mecatronică', 'Facultatea de Ingineria și Managementul Sistemelor Tehnologice', 'Facultatea de Ingineria Sistemelor Biotehnice', 'Facultatea de Transporturi', 'Facultatea de Inginerie Aerospațială', 'Facultatea de Știința și Ingineria Materialelor', 'Facultatea de Chimie Aplicată și Știința Materialelor', 'Facultatea de Inginerie în Limbi Străine', 'Facultatea de Științe Aplicate', 'Facultatea de Inginerie Medicală', 'Facultatea de Antreprenoriat, Ingineria și Managementul Afacerilor'];
  sports = ['Fotbal', 'Cros', 'Ștafetă', 'Șah', 'Tenis de masă', 'Tenis de câmp', 'Volei', 'Baschet', 'Tenis cu piciorul', 'Dans Battle'];
  constructor() { }

  ngOnInit() {
    const formArray = this.registerFormGroup.get('sports') as FormArray;
    this.sports.forEach(x => formArray.push(new FormControl(false)));
    this.registerFormGroup.get('captain').valueChanges.subscribe(value => {
      console.log(value);
      if (value === 'true') {
        this.showCaptainRecommendation = true;
        this.registerFormGroup.get('captainRecommendation').setValidators(Validators.required);
      } else {
        this.showCaptainRecommendation = false;
        this.registerFormGroup.get('captainRecommendation').clearValidators();
        this.registerFormGroup.get('captainRecommendation').setValue(null);
      }
    })
  }

  sportsValidator(fa: FormArray): {[s: string]: boolean} {
    let checked = 0;
    fa.controls.forEach(control => {
      if (control.value === true) {
        checked++;
      }
    });
    if (checked < 2) {
      return {'minimumTwoSportsRequired': true};
    }
    return null;
  }

  showSportsError(): boolean {
    let sportsFormArray = this.registerFormGroup.get('sports') as FormArray;
    return sportsFormArray.hasError('minimumTwoSportsRequired') && sportsFormArray.touched && sportsFormArray.dirty;
  }

  onSubmit() {
    console.log(this.registerFormGroup);
  }
}
