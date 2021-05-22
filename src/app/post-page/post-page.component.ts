import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder } from '@angular/forms';
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
import {MatDialog} from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map } from 'rxjs/operators';
import {MatChipsModule} from '@angular/material/chips';


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


enum SearchValues {
  COLLEGE_CONNECTION = 'college-connection',
  BLUE_CLUBS = 'blue-clubs',
  COURSE_A_E = 'course-a-e',
  COURSE_F_M = 'course-f-m',
  COURSE_N_Z = 'course-n-z',
  ENTREP_IDEA = 'entrep',
  HELP_WANTED = 'help',
  HOUSING = 'housing',
  MISCELL_BUY_SELL = 'buy-sell',
  SCHOOL_WORK = 'school-work',
  SPIRITUALITY = 'spiritituality',
  U_OF_T_QS = 'questions',
  UPCOMING_EVENTS = 'upcoming-events',
}
interface SearchOption {
  value: string;
  name: string;
}



enum BooleanOptions {
  Can_Drive = 'able-to-drive',
  Payement_Service = 'pay-service',
  Formal_Event = 'formal-event',
  Relaxed_Event = 'relaxed-event',
  Male = 'male',
  Female = 'female',
  All = 'all',
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
  // Mobile tag friends
  friendCtrlM = new FormControl();
  filteredFriendsM: Observable<string[]>;
  friendsM: string[] = [];
  // allFriends should filter through your friend list mobile
  allFriendsM: string[] = [''];
  @ViewChild('friendInputM') friendInputM: ElementRef<HTMLInputElement>;
  @ViewChild('autoM') matAutocompleteM: MatAutocomplete;

  isLinear = false;
  time: FormControl = new FormControl('');
  checked1: FormControl = new FormControl('');
  checked2: FormControl = new FormControl('');
  checked3: FormControl = new FormControl('');
  value: FormControl = new FormControl('');
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  date: FormControl =  new FormControl(moment());
  taggedFriends: FormControl =  new FormControl('');
  upload: FormControl =  new FormControl('');
  driver: FormControl =  new FormControl('');
  paymentService: FormControl =  new FormControl('');
  formalEvent: FormControl =  new FormControl('');
  relaxedEvent: FormControl =  new FormControl('');
  male: FormControl =  new FormControl('');
  female: FormControl =  new FormControl('');
  all: FormControl =  new FormControl('');
  views: FormControl =  new FormControl('');
  likes: FormControl =  new FormControl('');
  comments: FormControl =  new FormControl('');
  peopleAmount: FormControl =  new FormControl('');
  location: FormControl =  new FormControl('');
  search: FormControl =  new FormControl('');



    postForm = new FormGroup({
      title: this.title,
      description: this.description,
      date: this.date,
      taggedFriends: this.taggedFriends,
      upload: this.upload,
      driver: this.driver,
      paymentService: this.paymentService,
      formaEvent: this.formalEvent,
      relaxedEvent: this.relaxedEvent,
      male: this.male,
      female: this.female,
      all: this.all,
      views: this.views,
      likes: this.likes,
      comments: this.comments,
      peopleAmount: this.peopleAmount,
      location: this.location,
      search: this.search,
      checked1: this.checked1,
      checked2: this.checked2,
      checked3: this.checked3,
      value: this.value,
      time: this.time,
    });
    firstFormGroup = new FormGroup({
      date: this.date,
    });
    secondFormGroup = new FormGroup({
      peopleAmount: this.peopleAmount,
    });
    thirdFormGroup = new FormGroup({
      driver: this.driver,
      paymentService: this.paymentService,
    });
    fourthFormGroup = new FormGroup({
      formaEvent: this.formalEvent,
      relaxedEvent: this.relaxedEvent,
    });

    public searchOptions: SearchOption[] = [
    { name: 'Blues Clubs', value: SearchValues.BLUE_CLUBS },
    { name: 'Buy & Sell', value: SearchValues.MISCELL_BUY_SELL },
    { name: 'College Connection', value: SearchValues.COLLEGE_CONNECTION },
    { name: 'Courses A-E', value: SearchValues.COURSE_A_E },
    { name: 'Courses F-M', value: SearchValues.COURSE_F_M },
    { name: 'Courses N-Z', value: SearchValues.COURSE_N_Z },
    { name: 'Entrepreneurial Opportunities', value: SearchValues.ENTREP_IDEA },
    { name: 'Helping Hand', value: SearchValues.HELP_WANTED },
    { name: 'Housing', value: SearchValues.HOUSING },
    { name: 'School Work', value: SearchValues.SCHOOL_WORK },
    { name: 'Spirituality', value: SearchValues.SPIRITUALITY },
    { name: 'Questions', value: SearchValues.U_OF_T_QS },
    { name: 'Upcoming Events', value: SearchValues.UPCOMING_EVENTS },
    ];
    public selectedOption: string;
    public specificOptions: string[];
  constructor(public dialog: MatDialog, private FORMBuilder: FormBuilder ) {
    // Desktop tag friends
    this.filteredFriends = this.friendCtrl.valueChanges.pipe(
      map((friend: string | null) => friend ? this._filter(friend) : this.allFriends.slice()));
      // Mobile tag friends
    this.filteredFriendsM = this.friendCtrlM.valueChanges.pipe(
        map((friendM: string | null) => friendM ? this._filterM(friendM) : this.allFriendsM.slice()));
    }
  openDialog(): void {
    this.dialog.open(DialogElementsComponent);
  }
  ngOnInit(): void {
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
// Mobile tag friends
addM(event: MatChipInputEvent): void {
  const valueM = (event.value || '').trim();

  if (valueM) {
    this.friendsM.push(valueM);
  }

  this.friendCtrlM.setValue(null);
}
selectedM(event: MatAutocompleteSelectedEvent): void {
  this.friendsM.push(event.option.viewValue);
  this.friendInputM.nativeElement.value = '';
  this.friendCtrlM.setValue(null);
}
removeM( friendM: string): void {
  const indexM = this.friendsM.indexOf(friendM);
  if (indexM >= 0) {
    this.friendsM.splice(indexM, 1);
  }
}
private _filterM(valueM: string): string[] {
  const filterValueM = valueM.toLowerCase();
  return this.allFriendsM.filter(friendM => friendM.toLowerCase().indexOf(filterValueM) === 0);
}
// First step at ability to uplaod img/file attempt
 OnFileSelected(event: Event): void
{}
  onSearchSelection(value: string): void {
    switch (value) {
      case SearchValues.COLLEGE_CONNECTION:
        this.specificOptions = [
          'Applied Science & Engineering',
          'Architecture, Landscape & Design',
          'Arts & Science',
          'Continuing Studies',
          'Dentistry',
          'Education',
          'Information',
          'Kinesiology & Physical Education',
          'Law',
          'Management',
          'Medicine',
          'Music',
          'Nursing',
          'Pharmacy',
          'Public Health',
          'Social Work',
          'Innis College',
          'New College',
          'St.Micheals College',
          'Trinity College',
          'University College',
          'U Of T Mississauga Campus',
          'U Of T Scarborough',
          'Victoria College',
          'Woodsworth College',
        ];
        break;
      case SearchValues.BLUE_CLUBS:
        this.specificOptions = [
          'Academic',
          'Arts',
          'Athletics & Recreation',
          'Community Service',
          'Culture & Identities',
          'Environment & Sustainability',
          'Hobby & Leisure',
          'Global Interests',
          'Leadership',
          'Media',
          'Other',
          'Politics',
          'Social Justice & Advocacy',
          'Social',
          'Spirituality & Faith Communities',
          'Student Governments, Unions & Councils',
          'Work & Career Development',
        ];
        break;
      case SearchValues.COURSE_A_E:
        this.specificOptions = [
          'Academic Bridging Program',
          'Acturial Science',
          'American Studies',
          'Anatomy',
          'Anthropology,',
          'Archaeology',
          'Architecture & Visual Studies',
          'Art History',
          'Astronomy & Astrophysics',
          'Biochemistry',
          'Biology',
          'Theoretical Astrophysics',
          'Cell & Systems Biology',
          'Cinema Studies Institute',
          'Computer Science',
          'Contemporary Asian Studies',
          'Criminology & Sociolegal Studies',
          'Diaspora & Transnational Studies',
          'Drama',
          'Theatre & Performance Studies',
          'Earth Sciences',
          'East Asian Studies',
          'Ecology & Evolutionary Studies',
          'Economics',
          'Environmental School',
          'Estonian',
          'Ethics',
          'European Studies',
        ];
        break;
      case SearchValues.COURSE_F_M:
        this.specificOptions = [
          'Finnish',
          'First-Year Foundations',
          'Forest Conservation & Forest Biomaterials Science',
          'French',
          'Geography & Planning',
          'German',
          'History',
          'History & Philosophy & Technology',
          'Human Biology',
          'Hungarian',
          'Immunology',
          'Impact Culture',
          'Indigenous Studies',
          'Industrial Relations & Resources (Centre For)',
          'Innis College',
          'Italian',
          'Centre For Jewish Studies',
          'Laboratory Medicine & Pathobiology',
          'Latin American Studies',
          'Life Sciences',
          'Linguistics',
          'Material Science',
          'Mathematics',
          'Molecular Genetics & Microbiology',
          'Munk One',
          'Music',
        ];
        break;
      case SearchValues.COURSE_N_Z:
        this.specificOptions = [
          'Near & Middle Eastern Civilizations',
          'New College',
          'Nutritional Sciences',
          'Peace, Conflict & Justice',
          'Pharmacology & Toxicology',
          'Philosophy',
          'Physiology',
          'Physics',
          'Planetary Science',
          'Political Science',
          'Portuguese',
          'Psychology',
          'Public Policy',
          'Religion',
          'Rotman Commerce',
          'St.Michaels College',
          'Sexual Diversity Studies',
          'Slavic Languages & Literature',
          'Sociology',
          'South Asian Studies',
          'Spanish',
          'Statistical Sciences',
          'Trinity College',
          'University College',
          'Victoria College',
          'Women & Gender Studies',
          'Woodsworth College',
          'Yiddish Studies',
        ];
        break;
      case SearchValues.ENTREP_IDEA:
        this.specificOptions = [
          'Arts',
          'Contracting',
          'Enviromental & Conservation',
          'Health Care',
          'Money Managing',
          'Non-Profit',
          'Science & Technology',
          'Sports',
          'Travel',
          'Unique Ideas',
        ];
        break;
      case SearchValues.HELP_WANTED:
        this.specificOptions = [
          'Cleaning',
          'Cooking & Grociers',
          'Designing',
          'Electronic Based',
          'Moving Furniture',
          'Transportation',
          'Walking Home',
        ];
        break;
      case SearchValues.HOUSING:
        this.specificOptions = [
          'Buy & Sell',
          'Searching For Residence',
          'Questions & Advice',
          'Roomate Wanted',
          'Subleting',
        ];
        break;
      case SearchValues.MISCELL_BUY_SELL:
        this.specificOptions = ['Looking To Buy/Sell', 'Miscellaneous'];
        break;
      case SearchValues.SCHOOL_WORK:
        this.specificOptions = [
          'Study Groups',
          'Tutors',
          'Buy/Sell School Supplies',
          'Instructor Review',
          'Question & Answer',
        ];
        break;
      case SearchValues.SPIRITUALITY:
        this.specificOptions = [
          'Church Times & Locations',
          'Faith Based Activities',
          'Fundraisers',
          'Need Support',
          'Prayer Groups',
          'Prayer Requests',
        ];
        break;
      case SearchValues.U_OF_T_QS:
        this.specificOptions = [
          'Class Registration Advice',
          'Student Discounts',
          'Open Questions',
        ];
        break;
      case SearchValues.UPCOMING_EVENTS:
        this.specificOptions = [
          'Arts & Science',
          'Club Sports',
          'Concerts',
          'Drop In Games',
          'Festivals',
          'Fraternities & Sororities',
          'Fundraisers',
          'Intramural Sports',
          'Miscellaneous',
          'Parties & Clubs',
          'Varsity Sports',
          'Video & Board Games',
        ];
        break;

      default:
        this.specificOptions = [];
    }
  }



  formatLabel(value: number): any {
    if (value >= 100) {
      return Math.round(value / 1) + '+';
    }
    return value;
  }
  clearTitle(): void{
  this.title.setValue('');
}


  clearLocation(): void{
    this.location.setValue('');
  }


  onFormSubmit(): void {
    // TODO: wire up to post request
    console.log(this.postForm.value);
  }

  onfirstFormSubmit(): void {
    // TODO: wire up to post request
    console.log(this.firstFormGroup.value);
  }

  onsecondFormSubmit(): void {
    // TODO: wire up to post request
    console.log(this.secondFormGroup.value);
  }

  onthirdFormSubmit(): void {
    // TODO: wire up to post request
    console.log(this.thirdFormGroup.value);
  }
  onfourthFormSubmit(): void {
    // TODO: wire up to post request
    console.log(this.fourthFormGroup.value);
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
export class DialogElementsComponent {}



