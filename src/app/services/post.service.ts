import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface Post {
    Title: String;
    PostDescription: String;
    Upload: String;
    PostLocation: String;
    FriendCtrl: String[];
    FirstFormGroup: String;
    SecondFormGroup: String;
    ThirdFormGroup: Boolean;
    FourthFormGroup: String;


}
@Injectable({
    providedIn: 'root',
})
export class PostService {
    post$$: ReplaySubject<Post> = new ReplaySubject<Post>(1);
    static post$$: string[];

    gender$: Observable<Post> = new Observable;
    static gender$: string[];

    booleans$: Observable<Post> = new Observable;
    static booleans$: boolean;

    event$: Observable<Post> = new Observable;
    static event$: string[];



    constructor() { }

    setPost(post: Post): void {
        this.post$$.next(post)
    }

}