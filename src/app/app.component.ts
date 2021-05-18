import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faCoffee = faCoffee;
  title = 'angular-SCHOLARLY';

 isHomeScreen$: Observable<boolean>;

  isPostScreen$: Observable<boolean>;

  isSearchScreen$:Observable<boolean>;

  isFriendsActScreen$:Observable<boolean>;

  isProfileScreen$:Observable<boolean>;

  searchBox: Element;

  search: FormControl = new FormControl('');
  searchForm = new FormGroup({
    search: this.search,
  });

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    document.getElementsByClassName('search-box__icon')[0]?.addEventListener('click', this.activateSearch);
    this.searchBox = document.getElementsByClassName('search-box')[0];

    this.isHomeScreen$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url === '/' || event.url === '/login')
    );

    this.isPostScreen$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url === '/' || event.url === '/post-page')
    );

    this.isSearchScreen$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url === '/' || event.url === '/search')
    );

    this.isFriendsActScreen$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url === '/' || event.url === '/friends-activity')
    );


    this.isProfileScreen$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url === '/' || event.url === '/profile')
    );



  }

  // Missing link to fix search icon movement i hope
  // searchIcon.addEventListener("click", activateSearch);
  activateSearch(): void {
    this.searchBox.classList.toggle('active');
  }

  clearSearch(): void{
    this.search.setValue('');
  }

  onSubmit(): void {
    console.log(this.searchForm.value);
  }
}
