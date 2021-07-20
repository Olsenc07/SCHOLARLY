import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
import { MatDialog } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchListService } from '../services/search.service';


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

interface SearchOption {
  value: string;
  name: string;
}

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})

export class PostPageComponent implements OnInit {
  public selectedOption: string;
  public specificOptions: string[];
  public searchOptions: SearchOption[];

  Title = '';


  url: string;

  selectedIndex = 0;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  // Desktop tag friends
  friendCtrl = new FormControl();
  filteredFriends: Observable<string[]>;
  friends: string[] = [];
  @ViewChild('friendInput') friendInput: ElementRef<HTMLInputElement>;
  // Autocomplete should really just be a filter for your friend list,
  // and displayed when user clicks on input line, rn doesn't work properly
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  // allFriends should filter through your friend list desktop
  allFriends: string[] = [''];


  isLinear = false;
  postTitle: FormControl = new FormControl('');
  postUpload: FormControl = new FormControl('');
  postLocation: FormControl = new FormControl('');
  locationEvent: FormControl = new FormControl('');
  time: FormControl = new FormControl('');
  value: FormControl = new FormControl('');
  postDescription: FormControl = new FormControl('');
  date: FormControl = new FormControl(moment());
  upload: FormControl = new FormControl('');
  driver: FormControl = new FormControl('');
  paymentService: FormControl = new FormControl('');
  formalEvent: FormControl = new FormControl('');
  relaxedEvent: FormControl = new FormControl('');
  male: FormControl = new FormControl('');
  female: FormControl = new FormControl('');
  all: FormControl = new FormControl('');
  search: FormControl = new FormControl('');

  firstFormGroup = new FormGroup({
    date: this.date,
    time: this.time,
    locationEvent: this.locationEvent,
  });
  secondFormGroup = new FormGroup({
    male: this.male,
    female: this.female,
    all: this.all,
  });
  thirdFormGroup = new FormGroup({
    driver: this.driver,
    paymentService: this.paymentService,
  });
  fourthFormGroup = new FormGroup({
    formalEvent: this.formalEvent,
    relaxedEvent: this.relaxedEvent,
  });
  postForm = new FormGroup({
    // Desktop
    postTitle: this.postTitle,
    postDescription: this.postDescription,
    postUpload: this.postUpload,
    firstFormGroup: this.firstFormGroup,
    secondFormGroup: this.secondFormGroup,
    thirdFormGroup: this.thirdFormGroup,
    fourthFormGroup: this.fourthFormGroup,
    postLocation: this.postLocation,
    friendCtrl: this.friendCtrl,
    upload: this.upload,
  });
  constructor(public dialog: MatDialog, public searchListService: SearchListService, private FORMBuilder: FormBuilder) {
    // Desktop tag friends
    this.filteredFriends = this.friendCtrl.valueChanges.pipe(
      map((friend: string | null) => friend ? this._filter(friend) : this.allFriends.slice()));

  }
  openDialog(): void {
    this.dialog.open(DialogElementsComponent);
  }
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
  clearUpload(): void {
    this.upload.setValue('');
    document.getElementById('upload').removeAttribute('src');
    document.getElementById('upload2').removeAttribute('src');
  }

  ngOnInit(): void {
    this.searchOptions = this.searchListService.getSearchOptions();

    this.firstFormGroup = this.FORMBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this.FORMBuilder.group({
      secondCtrl: ['']
    });
    this.thirdFormGroup = this.FORMBuilder.group({
      thirdCtrl: ['']
    });
    this.fourthFormGroup = this.FORMBuilder.group({
      fourthCtrl: ['']
    });



  }
  onSearchSelection(value): void {
    console.log(value);
    this.specificOptions = this.searchListService.onSearchSelection(value);
  }
  // Desktop tag friends
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our friend
    if (value) {
      this.friends.push(value);
    }
    // Clear the input value
    // event.chipInput!.clear();

    this.friendCtrl.setValue(null);
  }
  remove(friend: string): void {
    const index = this.friends.indexOf(friend);
    if (index >= 0) {
      this.friends.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.friends.push(event.option.viewValue);
    this.friendInput.nativeElement.value = '';
    this.friendCtrl.setValue(null);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFriends.filter(friend => friend.toLowerCase().indexOf(filterValue) === 0);
  }



  formatLabel(value: number): any {
    if (value >= 100) {
      return Math.round(value / 1) + '+';
    }
    return value;
  }
  clearTitle(): void {
    this.postTitle.setValue('');
  }

  onFormSubmit(): void {
    // TODO: wire up to post request
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);
    console.log(this.fourthFormGroup.value);
    console.log(this.postForm.value);
  }


  changeTab(): void {
    this.selectedIndex = this.selectedIndex === 1 ? 0 : 1;
  }
  changeTab1(): void {
    this.selectedIndex = this.selectedIndex === 0 ? 1 : 0;
  }
}
@Component({
  selector: 'app-post-page',
  templateUrl: './dialog-elements.component.html',
  styleUrls: ['./dialog-elements.component.scss'],
})
export class DialogElementsComponent { }



