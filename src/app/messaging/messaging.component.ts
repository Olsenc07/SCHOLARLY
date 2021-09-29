import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';


@Component({
    selector: 'messaging',
    templateUrl: './messaging.component.html',
    styleUrls: ['./messaging.component.scss'],
})
export class MessagingComponent {
 // allUsers should filter through every user
 allUsers: string[] = [''];
//  List of people you are talking to
 chats = [''];

    search: FormControl = new FormControl('');
    filteredSearch: Observable<string[]>;
    searchForm = new FormGroup({
      search: this.search,
    });

    constructor( )
        {
        this.filteredSearch = this.search.valueChanges.pipe(
            map((user: string | null) => user ? this._filter(user) : this.allUsers.slice()));
        }
        private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.allUsers.filter(user => user.toLowerCase().indexOf(filterValue) === 0);
              }
            

};