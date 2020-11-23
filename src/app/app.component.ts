import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // New
//   const searchIcon = document.getElementsByClassName('search-box__icon')[0];
//   const searchBox = document.getElementsByClassName('search-box')[0];
//   searchIcon;.addEventListener('click', activateSearch);
// function activateSearch() {
//   searchBox.classList.toggle('active');
//   }
// End
faCoffee = faCoffee;
  title = 'angular-SCHOLARLY';
  search: FormControl = new FormControl('');

  searchForm = new FormGroup({
    search: this.search,
  });

  constructor() { }

  ngOnInit(): void {
  }
clearSearch(): void{
  this.search.setValue('');
}

onSubmit(): void {
  // TODO: wire up to login request
  console.log(this.searchForm.value);
}
}
