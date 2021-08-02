import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
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

    constructor() { }

    setPost(post: Post): void {
        this.post$$.next(post)
    }

}