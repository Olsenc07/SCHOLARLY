import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment} from 'moment';

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
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },

  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
]
})
export class SignupComponent implements OnInit {
  MatIconModule: any;

  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  major: FormControl = new FormControl('');
  sport: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  birthday: FormControl = new FormControl('');
  gender: FormControl = new FormControl('');
  relationship: FormControl = new FormControl('');
  email: FormControl = new FormControl('');

  signupForm = new FormGroup({
    username: this.username,
    password: this.password,
    major: this.major,
    sport: this.sport,
    name: this.name,
    gender: this.gender,
    relationship: this.relationship,
    email: this.email,
  });

  date = new FormControl(moment());
  // tslint:disable-next-line: typedef
  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 1 ) + '+' ;
    }
  }
  constructor() {}

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

  clearGender(): void {
    this.gender.setValue('');
  }

  clearRelationship(): void {
    this.relationship.setValue('');
  }
clearEmail(): void {
  this.email.setValue('');
}

  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.signupForm.value);
  }
  ngOnInit(): void {}


// Every class code U Of T, use to create chip input which fills created and pursuing courses on profile page.
  allClases: string[] = [
'ABP100Y1','ABP101Y1','ABP102Y1','ABP103Y1','ABP104Y1','ABP105Y1','ABP106Y1','ABP107Y1','ABP108Y1','ABP109Y1','ACT199H1','ACT230H1','ACT240H1','ACT245H1','ACT247H1','ACT348H1','ACT349H1','ACT350H1','ACT370H1','ACT371H1','ACT372H1','ACT390H1','ACT391H1','ACT398H0','ACT398Y0','ACT451H1','ACT452H1','ACT455H1','ACT460H1','ACT466H1','ACT470H1','ACT471H1','ACT473H1','ACT475H1','ACT496H1','ACT497H1','ACT498Y1','ACT499Y1','AFR150Y1','AFR250Y1','AFR280Y1','AFR322H1','AFR351Y1','AFR352H1','AFR353H1','AFR354H1','AFR355H1','AFR357H1','AFR358H1','AFR359H1','AFR380Y1','AFR450Y1','AFR451H1','AFR453H1','AFR453Y1','AFR454H1','AFR455H1','AFR459H1','AMS200H1','AMS210H1','AMS300H1','AMS310H1','AMS311H1','AMS312H1','AMS313H1','AMS400H1','AMS401H1','AMS402H1','AMS403H1','AMS494H1','AMS495Y1','ANA300Y1','ANA301H1','ANA400H1','ANA411H1','ANA420H!','ANA496H1','ANA497H1','ANA498Y1','ANT100Y1',
'ANT192H1','ANT193H1','ANT194H1','ANT195H1','ANT196H1','ANT197H1','ANT198H1','ANT199H1','ANT200Y1','ANT203Y1','ANT204H1','ANT205H1','ANT207H1','ANT208H1','ANT210H1','ANT253H1','ANT299Y1','ANT311Y0','ANT311Y1','ANT314H1','ANT315H1','ANT317H1','ANT318H1','ANT319Y1','ANT320H1','ANT322H1','ANT324H1','ANT327H1','ANT329H1','ANT330Y1','ANT333Y1','ANT334H1','ANT335Y1','ANT336H1','ANT337H1','ANT338H1','ANT340H1','ANT341H1','ANT343H1','ANT345H1','ANT346H1','ANT347H1','ANT348H1','ANT349H1','ANT356H1','ANT358H1','ANT362H1','ANT364H1','ANT366H1','ANT368H1','ANT370H1','ANT372H1','ANT374H1','ANT376H1','ANT378H1','ANT380H1','ANT384H1','ANT386H1','ANT390H1','ANT395Y0','ANT396Y0','ANT398H0','ANT398Y0','ANT399Y1','ANT406H1','ANT407H1','ANT409H1','ANT410H1','ANT411H1',
'ANT412H1','ANT415Y1','ANT416H1','ANT419H1','ANT420H1','ANT425H1','ANT426H1','ANT430H1','ANT431H1','ANT434H1','ANT435H1','ANT436H1','ANT437H1','ANT438H1','ANT441H1','ANT450H1','ANT455H1','ANT456H1','ANT457H1','ANT458H1','ANT459H1','ANT460H1','ANT462H1','ANT472H1','ANT473H1','ANT474H1','ANT475H1','ANT476H1','ANT477H1','ANT480H1','ANT481H1','ANT483H1','ANT484H1','ANT485H1','ANT486H1','ANT490Y1','ANT491H1','ANT491Y1','ANT497Y1','ANT498H1','ANT499H1','APM236H1','APM306Y1','APM346H1','APM348H1','APM396H1','APM421H1','APM426H1','APM441H1','APM446H1','APM461H1','APM462H1','APM466H1','APM496H1','ARH305H1','ARH306Y1','ARH309H1','ARH312Y1','ARH360H1','ARH361H0','ARH361H1','ARH361Y0','ARH361Y1','ARH398H0','ARH398Y0','ARH482H1','ARH494H1','ARH495H1','AST101H1','AST121H1','AST198H1','AST199H1','AST201H1','AST210H1','AST221H1','AST222H1','AST251H1','AST299Y1','AST301H1','AST310H1',
'AST320H1','AST325H1','AST326Y1','AST398H0','AST398Y0','AST399Y1','AST424H1','AST425Y1','AST430H1','AST431H1','AST431Y1','BCB330Y1','BCB410H1','BCB420H1','BCB430Y1','BCH210H1','BCH242Y1','BCH299Y1','BCH311H1','BCH340H1','BCH370H1','BCH372Y1','BCH373H1','BCH374Y1','BCH375H1','BCH377H1','BCH378H1','BCH399Y1','BCH422H1','BCH425H1','BCH426H1','BCH428H1','BCH440H1','BCH441H1','BCH444H1','BCH445H1','BCH446H1','BCH448H1','BCH449H1','BCH450H1','BCH470H1','BCH471H1','BCH472Y1','BCH473Y1','BCH478H1','BCH479H1','BIO120H1','BIO130H1','BIO220H1','BIO230H1','BIO251H1','BIO255H1','BIO260H1','BIO270H1','BIO271H1','BMS100H1','BMS200Y1','BMS201H1','BMS300H1','BMS301H1','BMS302H1','BMS303H1','BMS311H1','BMS314H1','BMS316H1','BMS319H1','BMS331H1','BMS332H1','BMS350H1','BMS386H1','BMS387H1','BMS389H1','BMS392H1','BMS394H1','BMS395Y1','BMS400H1','BMS401H1','BMS402H1','BMS403H1','BMS411H1','BMS494H1','BMS495Y1','BPM214H1','BPM232H1','BPM330H1','BPM332H1','BPM333H1','BPM334H1','BPM335H1','BPM336H1','BPM337H1','BPM338H1','BPM339H1','BPM381H1','BPM430H1','BPM432H1','BPM433H1','BPM438H1','CAR120Y1','CAR220H1','CAR221H1','CAR225H1','CAR226H1','CAR315H1','CAR316H1','CAR317H1','CAR321H1','CAR324H1','CAR325H1','CAR328H1','CAR329H1','CAR421H1','CAR422H1','CAR423H1','CAR426H1','CAR426Y1','CAR428H1','CAR429H1'
,'CAS200H1','CAS201H1','CAS202H1','CAS310H1','CAS320H1','CAS350H1','CAS360H1','CAS370H1','CAS390H1','CAS393H1','CAS393Y1','CAS400H1','CAS413H1','CAS414H1','CAS420H1','CAS430H1','CAS450H1','CAS490H1','CAS498H1','CAS498Y1','CDN197H1','CDN198H1','CDN199H1','CDN202H1','CDN205H1','CDN218H1','CDN221H1','CDN225H1','CDN230H1',
'CDN240H1','CDN267H1','CDN268H1','CDN280H1','CDN305H1','CDN307H1','CDN325H1','CDN335H1','CDN340H1','CDN355H1','CDN365H1','CDN367H1','CDN368H1','CDN380H1','CDN385H1','CDN390H1','CDN395H1','CDN405H1','CDN406H1','CDN420Y1','CDN425H1','CDN430Y1','CDN435Y1','CHC120H1','CHC200H1','CHC203Y1','CHC215H1','CHC218H1','CHC232H1','CHC303H1','CHC304H1','CHC305H1','CHC306H1','CHC307H1','CHC308H1','CHC309H1','CHC311H1','CHC312H1','CHC313H1','CHC322H1','CHC327H1','CHC330H1','CHC362H1','CHC364H1','CHC365H1','CHC367H1','CHC368H1','CHC369H1','CHC370H1','CHC371H1','CHC372H1','CHC379H1','CHC382H1','CHC383H1','CHC384H1','CHC390Y1','CHC391H1','CHC400H1','CHC433Y1','CHC434H1','CHC456H1','CHC471H1','CHC472H1','CHM101H1','CHM135H1','CHM136H1','CHM151Y1','CHM194H1','CHM195H1','CHM196H1','CHM197H1','CHM198H1','CHM199H1','CHM209H1','CHM210H1','CHM211H1','CHM217H1','CHM220H1','CHM222H1','CHM223H1','CHM238Y1','CHM247H1','CHM249H1','CHM299H1','CHM299Y1','CHM310H1','CHM317H1','CHM326H1','CHM327H1','CHM328H1','CHM338H1','CHM342H1','CHM343H1','CHM347H1','CHM348H1','CHM355H1','CHM379H1','CHM395Y1','CHM396Y0','CHM397H0','CHM398H0','CHM398Y0',
'CHM399H1','CHM410H1','CHM414H1','CHM415H1','CHM416H1','CHM417H1','CHM423H1','CHM427H1','CHM432H1','CHM437H1','CHM440H1','CHM441H1','CHM443H1','CHM447H1','CHM455H1','CHM456H1','CHM457H1','CHM458H1','CHM479H1','CHM499Y1','CIN105Y1','CIN196H1','CIN197H1','CIN201Y1','CIN210H1','CIN211H1','CIN212H1','CIN213H1','CIN214H1','CIN215H1','CIN216H1','CIN230H1','CIN240H1','CIN250Y1','CIN260H1','CIN270Y1','CIN301Y1','CIN310Y1','CIN312Y1','CIN314Y1','CIN320H1','CIN321H1','CIN322H1','CIN330Y1','CIN332Y1','CIN334H1','CIN335H1','CIN336H1','CIN337H1','CIN340H1','CIN341H1','CIN349H1','CIN352H1','CIN353H1','CIN360H1','CIN361H1','CIN362H1','CIN363H1','CIN364H1','CIN369H1','CIN370H1','CIN271H1','CIN372Y1','CIN374Y1','CIN376Y0','CIN376Y1','CIN378H1','CIN378Y0','CIN379H1','CIN380H1','CIN381H1','CIN381Y1','CIN410H1','CIN411H1','CIN412H1','CIN420H1','CIN430H1','CIN431H1','CIN432H1','CIN440H1','CIN450H1','CIN451H1','CIN452H1','CIN460H1','CIN470H1','CIN471H1','CIN472H1','CIN480H1','CIN490Y1','CIN491H1','CIN492H1','CJH332H1','CJH200H1','CJH201H1','CJH220H1','CJH230H1','CJH290H1','CJH330H1','CJH340H1','CJH383H1','CJH389H1','CJH390H1','CJH391H1','CJH392H1','CJH396H1','CJH400H1','CJH401H1','CJH401Y1','CJH430H1','CJH440H1','CJH444H1','CJH490H1','CJH491H1',
'CJS498Y1','CJS499H1','CLA160H1','CLA195H1','CLA196H1','CLA197H1','CLA198H1','CLA199H1','CLA201H1','CLA203H1','CLA204H1','CLA210H1','CLA215H1','CLA217H1','CLA219H1','CLA230H1','CLA231H1','CLA232H1','CLA233H1','CLA236H1','CLA260H1','CLA299H1','CLA299Y1','CLA303H1','CLA305H1','CLA308H1','CLA310H1','CLA312H1','CLA315H1','CLA317H1','CLA319H1','CLA321H1','CLA322H1','CLA336H1','CLA362H1','CLA363H1','CLA364H1','CLA367H1','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',

















  ]
}

