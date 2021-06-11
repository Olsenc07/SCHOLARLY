import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatDialog} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  clearMain(): void {
    this.main.setValue('');
  }
  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.mainForm.value);
  }
  // Fills same way just for different reasons
  // Each button opens this page by there should be 4 different functions with each sharin the open attendence comp, but each sends diff values/reasoning
    openAttendanceSheet(): void {
      this.dialog.open(AttendanceComponent);
    }
  
}
@Component({
  selector: 'app-main-pages',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent {}