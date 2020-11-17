import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss']
})
export class MainPagesComponent implements OnInit {

  main: FormControl = new FormControl('');
  

  mainForm = new FormGroup({
    main: this.main,

  });

  constructor() { }

  ngOnInit(): void {
  }

  clearMain(): void {
    this.main.setValue('');
  }
  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.mainForm.value);
  }

}
