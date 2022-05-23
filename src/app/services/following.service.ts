import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FollowingService {
    // Need to add user id to list when user clicks follow
    static Following = []




    constructor(private http: HttpClient) { }

}
