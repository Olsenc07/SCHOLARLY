import { Component, OnInit, ElementRef, ViewChild, Input, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import * as _moment from 'moment';

import { default as _rollupMoment} from 'moment';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { ClassListService } from '../services/class.service';




interface Gender {
  name: string;
}
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
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class SignupComponent implements OnInit {
visible = true;
selectable = true;
removable = true;
separatorKeysCodes: number[] = [ENTER, COMMA];
courseCodeCtrl = new FormControl();
courseCodeCtrlP = new FormControl();
filteredCodes: Observable<string[]>;
filteredCodesP: Observable<string[]>;
classes: string[] = [];
classesP: string[] = [];
@ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
@ViewChild('codeInputP') codeInputP: ElementRef<HTMLInputElement>;
@ViewChild('auto') matAutocomplete: MatAutocomplete;
@ViewChild('autoP') matAutocompleteP: MatAutocomplete;

selectedIndex = 0;
genders: Gender[] = [
{name: 'Female'},
{name: 'Male'},
{name: 'Other'},
{name: 'Perfer Not To Answer'},
];


MatIconModule: any;

username: FormControl = new FormControl('');
password: FormControl = new FormControl('');
major: FormControl = new FormControl('');
minor: FormControl = new FormControl('');
sport: FormControl = new FormControl('');
club: FormControl = new FormControl('');
name: FormControl = new FormControl('');
pronouns: FormControl = new FormControl('');
birthday: FormControl = new FormControl('');
genderChoice: FormControl = new FormControl('');
email: FormControl = new FormControl('');
termsCheck: FormControl = new FormControl('');
profilePic: FormControl = new FormControl('');
accountType: FormControl = new FormControl('');
features: FormControl = new FormControl('');

signupForm = new FormGroup({
    username: this.username,
    password: this.password,
    genderChoice: this.genderChoice,
    email: this.email,
    termsCheck: this.termsCheck,
    accountType: this.accountType,
    profilePic: this.profilePic,
    birthday: this.birthday,
    name: this.name,
    sport: this.sport,
    club: this.club,
    major: this.major,
    minor: this.minor,
    pronouns: this.pronouns,
    features: this.features,
  });
requiredForm = new FormGroup({
    email: this.email,
    username: this.username,
    password: this.password,
    genderChoice: this.genderChoice,
    accountType: this.accountType,
    termsCheck: this.termsCheck,
  });


date = new FormControl(moment());

 constructor(
    public dialog: MatDialog,
    public classListService: ClassListService
  ) {
    this.filteredCodes = this.courseCodeCtrl.valueChanges.pipe(
      map((code: string | null) =>
        code ? this._filter(code) : this.classListService.allClasses().slice()
      )
    );
    this.filteredCodesP = this.courseCodeCtrlP.valueChanges.pipe(
      map((code: string | null) =>
        code ? this._filter(code) : this.classListService.allClasses().slice()
      )
    );
  }

  // tslint:disable-next-line: typedef
formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 1) + '+';
    }
  }

add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our course code
    if (value) {
      this.classes.push(value);
    }

    // Clear the input value
    // event.chipInput!.clear();

    this.courseCodeCtrl.setValue(null);
  }
// Pursuing Courses
addP(event: MatChipInputEvent): void {
  const valueP = (event.value || '').trim();

  // Add our course code
  if (valueP) {
    this.classesP.push(valueP);
  }

  // Clear the input value
  // event.chipInput!.clear();

  this.courseCodeCtrlP.setValue(null);
}


openDialog(): void {
  this.dialog.open(TermsPopUpComponent);
}
remove(code: string): void {
    const index = this.classes.indexOf(code);
    if (index >= 0) {
      this.classes.splice(index, 1);
    }
  }
removeP(codeP: string): void {
    const indexP = this.classesP.indexOf(codeP);
    if (indexP >= 0) {
      this.classesP.splice(indexP, 1);
    }
  }
selected(event: MatAutocompleteSelectedEvent): void {
    this.classes.push(event.option.viewValue);
    this.codeInput.nativeElement.value = '';
    this.courseCodeCtrl.setValue(null);
  }
  // Pursuing Classes
selectedP(event: MatAutocompleteSelectedEvent): void {
  this.classesP.push(event.option.viewValue);
  this.codeInputP.nativeElement.value = '';
  this.courseCodeCtrlP.setValue(null);
}
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();


    return this.classListService
      .allClasses()
      .filter((code) => code.toLowerCase().indexOf(filterValue) === 0);
  }


clearUsername(): void {
    this.username.setValue('');
  }

clearPassword(): void {
    this.password.setValue('');
  }

clearMajor(): void {
    this.major.setValue('');
  }
clearMinor(): void {
    this.minor.setValue('');
  }

clearSport(): void {
    this.sport.setValue('');
  }
clearClub(): void {
    this.club.setValue('');
  }

clearName(): void {
    this.name.setValue('');
  }

  clearEmail(): void {
    this.email.setValue('');
  }
  changeTab(): void {
    this.selectedIndex = this.selectedIndex === 0 ? 1 : 0;
  }
  changeTab1(): void {
    this.selectedIndex = this.selectedIndex === 1 ? 2 : 1;
  }
  changeTab1R(): void {
    this.selectedIndex = this.selectedIndex === 1 ? 0 : 1;
  }
  changeTab2(): void {
    this.selectedIndex = this.selectedIndex === 2 ? 1 : 2;
  }



onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.signupForm.value);
  }
onSubmitPartOne(): void {
    // TODO: wire up to login request
    console.log(this.requiredForm.value);
  }

ngOnInit(): void {}


}

@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-popup.component.html',
  styleUrls: ['./terms-popup.component.scss'],
})
export class TermsPopUpComponent {}
