import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment} from 'moment';
import {MatDialog} from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { HttpClient  } from '@angular/common/http';

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
  cropImgPreview: any = '';
imgChangeEvt: any = '';
// PP isn't connected properly i dont think, since image is being cropped then returned as a base 64 value
profilePic: FormControl = new FormControl('');
  major: FormControl = new FormControl('');
  sport: FormControl = new FormControl('');
  bio: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  pronouns: FormControl = new FormControl('');
  minor: FormControl = new FormControl('');

  club: FormControl = new FormControl('');
  birthday: FormControl = new FormControl('');
  relationship: FormControl = new FormControl('');
  genderChoice: FormControl = new FormControl('');
  date: FormControl = new FormControl(moment());

  editForm = new FormGroup({
    major: this.major,
    sport: this.sport,
    name: this.name,
    birthday: this.birthday,
    relationship: this.relationship,
    genderChoice: this.genderChoice,
    date: this.date,
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
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    this.dialog.open(PopUpComponent);
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

  clearProfilePic(): void {
    this.profilePic.setValue('');
    document.getElementById('ProfilePic').removeAttribute('src');
  }

  

  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.editForm.value);
  }
}
@Component({
  selector: 'app-edit-profile',
  templateUrl: './pop-up-editP.component.html',
  styleUrls: ['./pop-up-editP.component.scss']
})
export class PopUpComponent {}
