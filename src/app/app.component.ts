import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
