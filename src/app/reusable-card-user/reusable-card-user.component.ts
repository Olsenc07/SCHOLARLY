import { Component } from '@angular/core';


@Component({
    selector: 'app-card-user',
    templateUrl: './reusable-card-user.component.html',
    styleUrls: ['./reusable-card-user.component.scss'],
})
export class ReusableCardUserComponent {
    // sends request to data base to get mutual friends list, by clicking on shaking hands emoji
    constructor() { }
}





@Component({
    selector: 'app-card-mutual',
    templateUrl: './reusable-card-mutual.component.html',
    styleUrls: ['./reusable-card-user.component.scss'],
})
export class ReusableCardMutualComponent {
    // Gets the id == id to fill mutual friends list from data base
    constructor() { }
}