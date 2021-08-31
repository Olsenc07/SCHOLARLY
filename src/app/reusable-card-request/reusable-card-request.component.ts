import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
    selector: 'app-card-request',
    templateUrl: './reusable-card-request.component.html',
    styleUrls: ['./reusable-card-request.component.scss'],
})

export class ReusableCardRequestComponent {


    ids = StoreService.ids;


    constructor() { }
}

