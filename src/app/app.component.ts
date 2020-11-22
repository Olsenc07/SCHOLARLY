import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-SCHOLARLY';  // what is the intention of this title?

  searchBox: Element;

  search: FormControl = new FormControl('');
  searchForm = new FormGroup({
    search: this.search,
  });

  constructor() { }

  ngOnInit(): void {
    document.getElementsByClassName('search-box__icon')[0].addEventListener('click', this.activateSearch);
    this.searchBox = document.getElementsByClassName('search-box')[0];
  }

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
