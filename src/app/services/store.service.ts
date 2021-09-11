import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

// Missing groups joined and posts made
export interface Profile {
  // TODO: other profile fields
  // No connection to their subjects
  CodePursuing: String[];
  CodeCompleted: String[];
  Name: String;
  Pronouns: String;
  profilePic: String;
  Gender: String;
  Major: String;
  Minor: String;
  Sport: String;
  Club: String;
  profPic: String;
  Birthday: MomentDateAdapter;
  ShowCase: String[];
  // ShowCasse: String[];
  filteredCodesP: Observable<String[]>;
  filteredCodes: Observable<String[]>;
}


export interface NewUserId {
  Email: String;
  UserName: String;
  Password: String;
  TermsCheck: Boolean;
}

export interface Cards {
  UserName: String;
  Major: String;
  Minor: String;
  Sport: String;
  Club: String;
  profPic: String;
}

// To pull without being attached to provite log in info..
// export interface UserId {
//   UserName: String;
// }

export interface Ids {
  profilePic: String;
  Gender: String;
  Major: String;
  Minor: String;
  Sport: String;
  Club: String;
  cropImgPreview: String;
}







@Injectable({
  providedIn: 'root',
})
export class StoreService {
  // Completed and pursing list...everything... should be filled from data base
  // These allow {{ }} to track length of list for badge display aswell

  // static Com = [
  //   'IMC200h1', 'Mat244h1', 'apm346h1', 'jpe395h1', 'phy152h1', 'phy231h1', 'hps301h1', 'hps371h1', 'hps202h1', 'mat223h1', 'mat235y1'
  //   , 'ggr101h1', 'hps260h1', 'mat224h1', 'phy256h1'];

  static Pur = ['HPS120h1', 'mat246h1', 'mat334h1', 'phy224h1',
    'jph441h1', 'mat301h1', 'mat315h1', 'phy324h1'];
  static Groups = ['', '', ''];

  static Posts = [{
    profilePic: '', Title: '',
    Specific: '', Location: '', Date: '', Upload: ''
  },

  ];


  // reusable card fillers
  static ids: Ids[] = [{
    cropImgPreview: '../../assets/Pics/IMG-8413.PNG',
    profilePic: '../../assets/Pics/IMG-8413.PNG',
    Gender: 'Male', Major: 'Physics and Math',
    Minor: 'History and Philosophy Of Science',
    Sport: 'Mens Varsity Hockey', Club: 'Chess'
  },

  ]


  static profile$$: ReplaySubject<Profile> = new ReplaySubject<Profile>(1);
  static userId$$: ReplaySubject<NewUserId> = new ReplaySubject<NewUserId>(1);

  // static profile$$: string[];

  constructor(private http: HttpClient) { }

  setUser(userId: NewUserId): void {
    StoreService.userId$$.next(userId);
  }
  setProfile(profile: Profile): void {
    StoreService.profile$$.next(profile)
  }




}
