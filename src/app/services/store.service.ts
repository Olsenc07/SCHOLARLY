import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface Profile {
  // TODO: other profile fields
  // No connection to their subjects
  CodePursuing: string[];
  CodeCompleted: string[];
  name: string;
}





@Injectable({
  providedIn: 'root',
})
export class StoreService {
  // Completed and pursing list...everything... should be filled from data base
  // These allow {{ }} to track length of list for badge display aswell
  static Com = [
    'IMC200h1', 'Mat244h1', 'apm346h1', 'jpe395h1', 'phy152h1', 'phy231h1', 'hps301h1', 'hps371h1', 'hps202h1', 'mat223h1', 'mat235y1'
    , 'ggr101h1', 'hps260h1', 'mat224h1', 'phy256h1'];
  static Pur = ['HPS120h1', 'mat246h1', 'mat334h1', 'phy224h1',
    'jph441h1', 'mat301h1', 'mat315h1', 'phy324h1'];
  static Groups = ['', '', ''];

  static Posts = [{
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  }
  ];




  // reusable card fillers
  static ids = [{
    "profilePic": "", "userName": "Olsen07",
    "Gender": "Male", "Major": "Physics and Math", "Minor": "History and Philosophy Of Science"
    , "Sport": "Mens Varsity Hockey", "Club": "Chess"
  }


  ]


  profile$$: ReplaySubject<Profile> = new ReplaySubject<Profile>(1);
  static profile$$: string[];

  constructor(private http: HttpClient) { }

  setProfile(profile: Profile): void {
    this.profile$$.next(profile);
  }



}
