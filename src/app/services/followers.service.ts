import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FollowerService {
    // User follower list is updated when user clicks follow on you
    static Follower = []




    constructor(private http: HttpClient) { }

}

