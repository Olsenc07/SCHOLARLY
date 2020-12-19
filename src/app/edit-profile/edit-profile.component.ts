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
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [
    {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },

  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
]
})
export class EditProfileComponent implements OnInit {
  major: FormControl = new FormControl('');
  sport: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  birthday: FormControl = new FormControl('');
  relationship: FormControl = new FormControl('');
  gender: FormControl = new FormControl('');

  editForm = new FormGroup({
    major: this.major,
    sport: this.sport,
    name: this.name,
    birthday: this.birthday,
    relationship: this.relationship,
    gender: this.gender,
  });
  date = new FormControl(moment());
  constructor() {}

  ngOnInit(): void {}

  clearMajor(): void {
    this.major.setValue('');
  }

  clearSport(): void {
    this.sport.setValue('');
  }

  clearName(): void {
    this.name.setValue('');
  }

  clearBirthday(): void {
    this.birthday.setValue('');
  }

  clearRelationship(): void {
    this.relationship.setValue('');
  }

  clearGender(): void {
    this.gender.setValue('');
  }

  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.editForm.value);
  }
}
