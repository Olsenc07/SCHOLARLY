import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment} from 'moment';
import {MatSliderModule} from '@angular/material/slider';

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
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  providers: [
    {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },

  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
]
})
export class PostPageComponent implements OnInit {
  myForm: FormGroup;
  date = new FormControl(moment());
  title = new FormControl();
  description = new FormControl();
  upload = new FormControl();
  // tslint:disable-next-line: typedef
  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 1 ) + '+' ;
    }

    return value;
  }

  constructor(private fb: FormBuilder) {}
  ngOnInit():  {
    this.myForm = this.fb.group({
title:'Title',
description:'Description',
    })
  }
}

