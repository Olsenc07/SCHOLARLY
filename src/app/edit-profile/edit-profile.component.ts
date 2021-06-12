import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment} from 'moment';
import {MatDialog} from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { HttpClient  } from '@angular/common/http';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ClassListService } from '../services/class.service';
import {MatButtonModule} from '@angular/material/button';



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
  url: string;
  cropImgPreview: any = '';
imgChangeEvt: any = '';
// PP isn't connected properly i dont think, since image is being cropped then returned as a base 64 value
profilePic: FormControl = new FormControl('');
  major: FormControl = new FormControl('');
  minor: FormControl = new FormControl('');
  sport: FormControl = new FormControl('');
  club: FormControl = new FormControl('');
  bio: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  pronouns: FormControl = new FormControl('');
  snapShot: FormControl = new FormControl('');
  accountType: FormControl = new FormControl('');
  birthday: FormControl = new FormControl('');
  relationship: FormControl = new FormControl('');
  genderChoice: FormControl = new FormControl('');
  date: FormControl = new FormControl(moment());


  editForm = new FormGroup({
    major: this.major,
    minor: this.minor,
    sport: this.sport,
    club: this.club,
    name: this.name,
    price: this.pronouns,
    birthday: this.birthday,
    relationship: this.relationship,
    genderChoice: this.genderChoice,
    date: this.date,
    accountType: this.accountType,
    profilePic: this.profilePic,
    courseCodeCtrl: this.courseCodeCtrl,
    courseCodeCtrlP: this.courseCodeCtrlP,

  });
  selectedIndex = 0;
  genders: Gender[] = [
  {name: 'Female'},
  {name: 'Male'},
  {name: 'Other'},
  {name: 'Perfer Not To Answer'},
  ];
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
  constructor(public dialog: MatDialog,
              public classListService: ClassListService,
              private http: HttpClient, ) {
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
  }add(event: MatChipInputEvent): void {
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
    this.dialog.open(PopUpComponent);
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
  ngOnInit(): void {}

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
  clearBio(): void {
    this.bio.setValue('');
  }

  clearProfilePic(): void {
    this.profilePic.setValue('');
    document.getElementById('ProfilePic').removeAttribute('src');
  }

  clearPic1(): void {
    this.snapShot.setValue('');
    document.getElementById('firstP').removeAttribute('src');
  }

  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.editForm.value);
  }
  function($scope): any{
    const longTxt = 100;
    $scope.longTxt = longTxt;
    $scope.text = '';
  }
}
@Component({
  selector: 'app-edit-profile',
  templateUrl: './pop-up-editP.component.html',
  styleUrls: ['./pop-up-editP.component.scss']
})
export class PopUpComponent {}
