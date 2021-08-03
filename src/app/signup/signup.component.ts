import { Component, OnInit, ElementRef, ViewChild, Input, NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ClassListService } from '../services/class.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { BehaviorSubject, Observable } from 'rxjs';


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
    { name: '' },
    { name: 'Female' },
    { name: 'Male' },
    { name: 'Other' },

  ];

  url: string;
  url2: string;
  url3: string;
  MatIconModule: any;
  cropImgPreview: any = '';
  imgChangeEvt: any = '';
  username: FormControl = new FormControl('', Validators.pattern('[a-zA-Z0-9_]*'));
  password: FormControl = new FormControl('');
  major: FormControl = new FormControl('');
  minor: FormControl = new FormControl('');
  sport: FormControl = new FormControl('');
  club: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  pronouns: FormControl = new FormControl('');
  birthday: FormControl = new FormControl();
  genderChoice: FormControl = new FormControl('');
  email: FormControl = new FormControl('', Validators.email);
  termsCheck: FormControl = new FormControl('');
  // PP isn't connected properly i dont think, since image is being cropped then returned as a base 64 value
  profilePic: FormControl = new FormControl('');
  courseCodeCtrl: FormControl = new FormControl('');
  courseCodeCtrlP: FormControl = new FormControl('');

  bio: FormControl = new FormControl('');
  public bioLength = new BehaviorSubject(0);
  snapShot1: FormControl = new FormControl('');
  snapShot2: FormControl = new FormControl('');
  snapShot3: FormControl = new FormControl('');


  requiredForm = new FormGroup({
    email: this.email,
    username: this.username,
    password: this.password,
    genderChoice: this.genderChoice,
    accountType: new FormControl(''),
    termsCheck: this.termsCheck,
  });

  personalizeForm = new FormGroup({
    profilePic: this.profilePic,
    name: this.name,
    pronouns: this.pronouns,
    birthday: this.birthday,
    bio: this.bio,
  });

  snapShotForm = new FormGroup({
    snapShot1: this.snapShot1,
    snapShot2: this.snapShot2,
    snapShot3: this.snapShot3,
  });
  signupForm = new FormGroup({
    courseCodeCtrl: this.courseCodeCtrl,
    courseCodeCtrlP: this.courseCodeCtrlP,
    sport: this.sport,
    club: this.club,
    major: this.major,
    minor: this.minor,
    requiredForm: this.requiredForm,
    personalizeForm: this.personalizeForm,
    snapShotForm: this.snapShotForm,
  });


  onImgChange(event: any): void {
    this.imgChangeEvt = event;
  }
  // Passes value as base64 string of cropped area!! But where does form controller come into play?
  cropImg(e: ImageCroppedEvent): void {
    this.cropImgPreview = e.base64;
  }

  imgLoad(): void {
    // display cropper tool
  }

  initCropper(): void {
    // init cropper
  }
  imgFailed(): void {
    // error msg
  }

  // SnapShot
  imagePreview(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (Event: any) => { // called once readAsDataURL is completed
        console.log(Event);
        this.url = Event.target.result;
      };
    }
  }
  imagePreview2(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (Event: any) => { // called once readAsDataURL is completed
        console.log(Event);
        this.url2 = Event.target.result;
      };
    }
  }
  imagePreview3(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (Event: any) => { // called once readAsDataURL is completed
        console.log(Event);
        this.url3 = Event.target.result;
      };
    }
  }
  constructor(
    public dialog: MatDialog,
    public classListService: ClassListService,
    private http: HttpClient,
  ) {
    this.bio.valueChanges.subscribe((v) => this.bioLength.next(v.length));


    this.filteredCodes = this.courseCodeCtrl.valueChanges.pipe(
      map((code: string | null) =>
        code ? this._filter(code) : this.classListService.allClasses().slice()
      )
    );
    this.filteredCodesP = this.courseCodeCtrlP.valueChanges.pipe(
      map((codeP: string | null) =>
        codeP ? this._filter(codeP) : this.classListService.allClasses().slice()
      )
    );
  }

  formatLabel(value: number): string {
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

  clearBio(): void {
    this.bio.setValue('');
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
  clearProfilePic(): void {
    this.profilePic.setValue('');
    document.getElementById('ProfilePic').removeAttribute('src');
  }
  clearPic1(): void {
    this.snapShot1.setValue('');
    document.getElementById('firstP').removeAttribute('src');
  }
  clearPic2(): void {
    this.snapShot2.setValue('');
    document.getElementById('secondP').removeAttribute('src');
  }
  clearPic3(): void {
    this.snapShot3.setValue('');
    document.getElementById('thirdP').removeAttribute('src');
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
    this.selectedIndex = this.selectedIndex === 2 ? 3 : 2;
  }
  changeTab2R(): void {
    this.selectedIndex = this.selectedIndex === 2 ? 1 : 2;
  }
  changeTab3(): void {
    this.selectedIndex = this.selectedIndex === 3 ? 2 : 3;
  }




  onSubmitPartOne(): void {
    // TODO: wire up to login request
    console.log(this.requiredForm.value);
  }
  onSubmitPartTwo(): void {
    // TODO: wire up to login request
    console.log(this.personalizeForm.value);
  }
  onSubmitPartThree(): void {
    // TODO: wire up to login request
    console.log(this.snapShotForm.value);
  }
  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.signupForm.value);
  }

  ngOnInit(): void { }
  // Image Preview


  openDialog(): void {
    this.dialog.open(TermsPopUpComponent);
  }
  openDialogAccount(): void {
    this.dialog.open(AccountTextComponent);
  }

}

@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-popup.component.html',
  styleUrls: ['./terms-popup.component.scss'],
})
export class TermsPopUpComponent { }

@Component({
  selector: 'app-accountText-page',
  templateUrl: './account-popup.component.html',
  styleUrls: ['./account-popup.component.scss'],
})
export class AccountTextComponent { }
