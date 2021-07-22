import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SearchListService } from '../services/search.service';

interface SearchOption {
  value: string;
  name: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  search: FormControl = new FormControl('');
  searchForm = new FormGroup({
    search: this.search,
  });

  public selectedOption: string;
  public specificOptions: string[];
  public searchOptions: SearchOption[];
  main = '';

  ngOnInit(): void {
    this.searchOptions = this.searchListService.getSearchOptions();
  }

  onSearchSelection(value: string): void {
    this.specificOptions = this.searchListService.onSearchSelection(value);

  }


  constructor(
    public dialog: MatDialog,
    public searchListService: SearchListService,
    private router: Router
  ) { }

  navigateToPage(value): void {
    this.router.navigate(['/main'], { queryParams: { category: value } });
  }





  clearSearch(): void {
    this.search.setValue('');
  }
}
