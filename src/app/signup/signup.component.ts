import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
import { default as _rollupMoment } from 'moment';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
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
  filteredCodes: Observable<string[]>;
  classes: string[] = [];
  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  selectedIndex = 0;
  genders: Gender[] = [
    { name: 'Female' },
    { name: 'Male' },
    { name: 'Other' },
    { name: 'Perfer Not To Answer' },
  ];

  MatIconModule: any;

  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  rePassword: FormControl = new FormControl('');
  major: FormControl = new FormControl('');
  minor: FormControl = new FormControl('');
  sport: FormControl = new FormControl('');
  club: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  birthday: FormControl = new FormControl('');
  genderChoice: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  termsCheck: FormControl = new FormControl('');
  profilePic: FormControl = new FormControl('');
  accountType: FormControl = new FormControl('');

  signupForm = new FormGroup({
    username: this.username,
    password: this.password,
    rePassword: this.rePassword,
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
  });
  requiredForm = new FormGroup({
    email: this.email,
    username: this.username,
    password: this.password,
    rePassword: this.rePassword,
    genderChoice: this.genderChoice,
    accountType: this.accountType,
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

  remove(code: string): void {
    const index = this.classes.indexOf(code);

    if (index >= 0) {
      this.classes.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.classes.push(event.option.viewValue);
    this.codeInput.nativeElement.value = '';
    this.courseCodeCtrl.setValue(null);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.classListService
      .allClasses()
      .filter((code) => code.toLowerCase().indexOf(filterValue) === 0);
  }

  openDialog(): void {
    this.dialog.open(TermsPopUpComponent);
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

  clearSport(): void {
    this.sport.setValue('');
  }

  clearName(): void {
    this.name.setValue('');
  }

  clearEmail(): void {
    this.email.setValue('');
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
