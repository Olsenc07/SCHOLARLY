import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {


  search: FormControl = new FormControl('');

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

  searchForm = new FormGroup({
    search: this.search,
  });
// 13 search pages
  constructor(public dialog: MatDialog) {}
  openDialog1(): void {
    this.dialog.open(BluesCOptionComponent);
  }
  openDialog2(): void {
    this.dialog.open(BuySComponent);
  }
  openDialog3(): void {
    this.dialog.open(CollegeConComponent);
  }
  openDialog4(): void {
    this.dialog.open(CoursesAEComponent);
  }

  openDialog5(): void {
    this.dialog.open(CoursesFMComponent);
  }

  openDialog6(): void {
    this.dialog.open(CoursesNZComponent);
  }
  openDialog7(): void {
    this.dialog.open(EntrepOppComponent);
  }
  openDialog8(): void {
    this.dialog.open(HelpingHComponent);
  }
   openDialog9(): void {
    this.dialog.open(HousingComponent);
  }
  openDialog10(): void {
    this.dialog.open(QuestionsComponent);
  }
  openDialog11(): void {
    this.dialog.open(SchoolWComponent);
  }
  openDialog12(): void {
    this.dialog.open(SpiritualityComponent);
  }
  openDialog13(): void {
    this.dialog.open(UpcomingEComponent);
  }






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
          'Pysics',
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

  ngOnInit(): void {}

  clearSearch(): void {
    this.search.setValue('');
  }
  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.searchForm.value);
  }
}
@Component({
  selector: 'app-post-page',
  templateUrl: './BluesC-option.component.html',
})
export class BluesCOptionComponent {

  public specificOptions1 = [
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
      }
@Component({
        selector: 'app-post-page',
        templateUrl: './BuyS.component.html',
      })
export class BuySComponent{
public specificOptions2 = [
  'Buy/Sell', 'Miscellaneous',
];
}
@Component({
  selector: 'app-post-page',
  templateUrl: './CollegeCon.component.html',
})
export class CollegeConComponent{
public specificOptions3 = [
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
}

@Component({
  selector: 'app-post-page',
  templateUrl: './CoursesAE.component.html',
})
export class CoursesAEComponent{
  public specificOptions4 = [
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
}
@Component({
  selector: 'app-post-page',
  templateUrl: './CoursesFM.component.html',
})
export class CoursesFMComponent{
  public specificOptions5 = [
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
}

@Component({
  selector: 'app-post-page',
  templateUrl: './CoursesNZ.component.html',
})
export class CoursesNZComponent{
  public specificOptions6 = [
    'Near & Middle Eastern Civilizations',
    'New College',
    'Nutritional Sciences',
    'Peace, Conflict & Justice',
    'Pharmacology & Toxicology',
    'Philosophy',
    'Physiology',
    'Pysics',
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
}
@Component({
  selector: 'app-post-page',
  templateUrl: './EntrepOpp.component.html',
})
export class EntrepOppComponent{
  public specificOptions7 = [
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
      }
@Component({
        selector: 'app-post-page',
        templateUrl: './HelpingH.component.html',
      })
      export class HelpingHComponent{
        public specificOptions8 = [  'Cleaning',
        'Cooking & Groceries',
        'Designing',
        'Electronic Based',
        'Moving/Furniture',
        'Transportation',
        'Walking Home',
      ];
    }

@Component({
      selector: 'app-post-page',
      templateUrl: './Housing.component.html',
    })
    export class HousingComponent{
      public specificOptions9 = [  'Buy & Sell',
      'ISO Residence',
      'Questions & Advice',
      'Roomate Wanted',
      'Subleting',
    ];
  }

@Component({
    selector: 'app-post-page',
    templateUrl: './Questions.component.html',
  })
  export class QuestionsComponent{
    public specificOptions10 = [
      'Class Registration Advice',
      'Student Discounts',
      'Open Questions',
    ];
  }

@Component({
    selector: 'app-post-page',
    templateUrl: './SchoolW.component.html',
  })
  export class SchoolWComponent{
    public specificOptions11 = [
      'Study Groups',
      'Tutors',
      'Buy/Sell School Supplies',
      'Instructor Review',
      'Question & Answer',
    ];
  }
@Component({
    selector: 'app-post-page',
    templateUrl: './Spirituality.component.html',
  })
  export class SpiritualityComponent{
    public specificOptions12 = [
      'Church Times & Locations',
      'Faith Based Activities',
      'Fundraisers',
      'Need Support',
      'Prayer Groups',
      'Prayer Requests',
    ];
  }

@Component({
    selector: 'app-post-page',
    templateUrl: './UpcomingE.component.html',
  })
  export class UpcomingEComponent{
    public specificOptions13 = [
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
  }
