import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, OnInit } from '@angular/core';
import { DefaultGridAlignColumnsDirective } from '@angular/flex-layout/grid/typings/align-columns/align-columns';
import { FormControl, FormGroup } from '@angular/forms';

Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

// Need myVariable value to be filled by a users selection. 
// Then a function to display the appropriate array.
enum SearchOptions {
  College_Connection = 'college/faculty-connection',
  Blues_Clubs = 'blue-clubs',
  COURSE_A_E = 'course-a-e',
  COURSE_F_M = 'course-f-m',
  COURSE_N_Z = 'course-n-z',
  ENTREP_IDEA = 'entrep',
  HELP_WANT = 'help',
  HOUSING = 'housing',
  MISCELL_BUY_SELL = 'buy&sell',
  SCHOOL_WORK = 'school-work',
  SPIRITUALITY = 'spiritituality',
  U_OF_T_QS = 'questions',
  UPCOMING_EVENTS = 'upcoming-events' 

}

if myVariable === SearchOptions.College_Connection {
  let alumni = ['Applied Science & Engineering', 'Architecture, Landscape & Design', 'Arts & Science', 'Continuing Studies', 'Dentistry', 'Education', 'Information', 'Kinesiology & Physical Education','Law','Management','Medicine', 'Music','Nursing','Pharmacy','Public Health','Social Work','Innis College','New College','St.Micheals College','Trinity College','University College','U Of T Mississauga Campus','U Of T Scarborough','Victoria College','Woodsworth College' ]
}
if myVariable === SearchOptions.Blues_Clubs {
let blue = ['Academic','Arts','Athletics & Recreation','Community Service','Culture & Identities','Environment & Sustainability','Hobby & Leisure','Global Interests','Leadership','Media','Other','Politics','Social Justive & Advocay','Social','Spirituality & Faith Communities','Student Governments, Unions & Councils','Work & Career Development']
if myVariable === SearchOptions.COURSE_A_E {
  let a_e = ['Academic Bridging Program','Acturial Science', 'American Studies', 'Anatomy',' Anthropology,','Archaeology','Architecture & Visual Studies','Art History','Astronomy & Astrophysics','Biochemistry','Biology','Candian Institutes For Theoretical Astrophysics','Cell & Systems Biology','Cinema Studies Institute', 'Computer Science','Contemporary Asian Studies','Criminology & Sociolegal Studies','Criminology & Sociolegal Studies','Diaspora & Transnational Studies','Drama', 'Theatre & Performance Studies','Earth Sciences','East Asian Studies','Ecology & Evolutionary Studies','Earth Sciences','East Asian Studies','Ecology & Evolutionary Biology','Economics','Environment(School of the)','Estonian','Ethics','European Studies']
}
if myVariable === SearchOptions.COURSE_F_M {
  let f_m = ['Finnish','First-Year Foundations','Forest Conservation & Forest Biomaterials Science','French','Geography & Planning','German','History','History & Philosophy & Technology','Human Biology','Hungarian','Immunology','Impact Culture','Indigenous Studies','Industrial Relations & Resources (Centre For)','Innis College','Italian','Centre For Jewish Studies','Laboratory Medicine & Pathobiology','Latin American Studies','Life Sciences','Linguistics','Material Science','Mathematics','Molecular Genetics & Microbiology','Munk One','Music']
  if myVariable === SearchOptions.COURSE_N_Z{
    let n_z = ['Near & Middle Eastern Civilizations','New College','Nutritional Sciences','Peace, Conflict & Justice','Pharmacology & Toxicology','Philosophy','Physiology','Pysics','Planetary Science','Political Science','Portuguese','Psychology','Public Policy','Religion','Rotman Commerce','St.Michaels College','Sexual Diversity Studies','Slavic Languages & Literature','Sociology','South Asian Studies','Spanish','Statistical Sciences','Trinity College','University College','Victoria College','Women & Gender Studies','Woodsworth College','Yiddish Studies']
  }

  if myVariable === SearchOptions.ENTREP_IDEA {
    let entrep =['Arts','Contracting','Enviromental & Conservation','Health Care','Money Managing','Non-Profit','Science & Technology','Sports','Travel','Unique Ideas']
  }

  if myVariable === SearchOptions.HELP_WANT {
    let help = ['Cleaning','Cooking & Grociers','Designing','Electronic Based','Moving Furniture','Transportation','Walking Home']
  }
  if myVariable === SearchOptions.HOUSING{
  let housing = ['Buy & Sell','Searching For Residence','Questions & Advice','Roomate Wanted','Subleting']
  }
  if myVariable === SearchOptions.MISCELL_BUY_SELL{
    let buy = ['Looking To Buy/Sell','Miscellaneous']
  }
  if myVariable === SearchOptions.SCHOOL_WORK{
    let school = ['Study Groups','Tutors','Buy/Sell School Supplies','Instructor Review','Question & Answer']
  }
  if myVariable === SearchOptions.SPIRITUALITY{
    let spirit = ['Church Times & Locations','Faith Based Activities','Fundraisers','Need Support','Prayer Groups','Prayer Requests']
  }
  if myVariable === SearchOptions.U_OF_T_QS{
    let questions = ['Class Registration Advice','Student Discounts','Open Questions']
  }
  if myVariable === SearchOptions.UPCOMING_EVENTS{
    let upcoming = ['Arts & Science','Club Sports','Concerts','Drop In Games','Festivals','Fraternities & Sororities','Fundraisers','Intramural Sports','Miscellaneous','Parties & Clubs','Varsity Sports','Video & Board Games']
  }
  // Fix

document.getElementById("").onclick = function() {
  // display appropriate array
};


export class SearchComponent implements OnInit {

  search: FormControl = new FormControl('');

  searchForm = new FormGroup({
    search: this.search,
  });

  constructor() { }

  ngOnInit(): void {
  }
clearSearch(): void{
  this.search.setValue('');
}
onSubmit(): void {
  // TODO: wire up to login request
  console.log(this.searchForm.value);
}
}
}
}