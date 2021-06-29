import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';



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

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss']
})
export class MainPagesComponent implements OnInit {

  @Input() specific = '';

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

  main: FormControl = new FormControl('');
  mainForm = new FormGroup({
    main: this.main,

  });

  constructor(private bottomSheet: MatBottomSheet) { }
  onSearchSelection(value: string): void {
    console.log(value);
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
          'Cooking & Groceries',
          'Designing',
          'Electronic Based',
          'Moving/Furniture',
          'Transportation',
          'Walking Home',
        ];
        break;
      case SearchValues.HOUSING:
        this.specificOptions = [
          'Buy & Sell',
          'ISO Residence',
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
  ngOnInit(): void {
  }

  clearMain(): void {
    this.main.setValue('');
  }
  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.mainForm.value);
  }
  // Fills same way just for different reasons
  // Each button opens this page by there should be 4 different functions with each
  // sharin the open attendence comp, but each sends diff values/reasoning
  openAttendanceSheet(): void {
    this.bottomSheet.open(AttendanceComponent);
  }
}
@Component({
  selector: 'app-main-pages',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<AttendanceComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
@Component({
  selector: 'app-main-pages',
  templateUrl: './tagged.component.html',
  styleUrls: ['./tagged.component.scss'],
})
export class TaggedComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<AttendanceComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}