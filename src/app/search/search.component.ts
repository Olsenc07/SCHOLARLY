import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

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
