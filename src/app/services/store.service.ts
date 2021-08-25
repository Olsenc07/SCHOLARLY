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
  // Completed and pursing list should be filled from data base
  // These allow {{ }} to track length of list for badge display
  static Com = ['', '', '', '', '', '', '', '', '', ''];
  static Pur = ['', '', '', '', '',];

  profile$$: ReplaySubject<Profile> = new ReplaySubject<Profile>(1);
  static profile$$: string[];

  constructor(private http: HttpClient) { }

  setProfile(profile: Profile): void {
    this.profile$$.next(profile);
  }



}
