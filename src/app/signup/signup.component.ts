import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [
    {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },

  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
]
})
export class SignupComponent implements OnInit {
  MatIconModule: any;

  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  major: FormControl = new FormControl('');
  sport: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  birthday: FormControl = new FormControl('');
  gender: FormControl = new FormControl('');
  relationship: FormControl = new FormControl('');
  email: FormControl = new FormControl('');

  signupForm = new FormGroup({
    username: this.username,
    password: this.password,
    major: this.major,
    sport: this.sport,
    name: this.name,
    gender: this.gender,
    relationship: this.relationship,
    email: this.email,
  });

  date = new FormControl(moment());
  // tslint:disable-next-line: typedef
  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 1 ) + '+' ;
    }
  }
  constructor() {}

  clearUsername(): void {
    this.username.setValue('');
  }

  clearPassword(): void {
    this.password.setValue('');
  }

  clearMajor(): void {
    this.major.setValue('');
  }

  clearSport(): void {
    this.sport.setValue('');
  }

  clearName(): void {
    this.name.setValue('');
  }

  clearGender(): void {
    this.gender.setValue('');
  }

  clearRelationship(): void {
    this.relationship.setValue('');
  }
clearEmail(): void {
  this.email.setValue('');
}

  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.signupForm.value);
  }
  ngOnInit(): void {}
}

