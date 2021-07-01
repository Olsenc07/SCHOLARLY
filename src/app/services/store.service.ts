import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export interface Profile {
  // TODO: other profile fields
  pursuingCourses: string[];
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  profile$$: ReplaySubject<Profile> = new ReplaySubject<Profile>(1);

  constructor() {}

  setProfile(profile: Profile): void {
    this.profile$$.next(profile);
  }
}
