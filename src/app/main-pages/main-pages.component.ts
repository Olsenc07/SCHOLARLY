import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';




@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss']
})
export class MainPagesComponent implements OnInit {
  @Input() category = '';
  @Input() specific = '';
  @Input() specificOptions = [''];

  ngOnChanges(changes: SimpleChanges) {
    changes.specificOptions
  }

  main: FormControl = new FormControl('');
  mainForm = new FormGroup({
    main: this.main,

  });

  constructor(private bottomSheet: MatBottomSheet) { }

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
  // Each button opens this page by there should be 4 different functions with each
  // sharin the open attendence comp, but each sends diff values/reasoning
  openAttendanceSheet(): void {
    this.bottomSheet.open(AttendanceComponent);
  }
}
@Component({
  selector: 'app-main-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<AttendanceComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
@Component({
  selector: 'app-main-tagged',
  templateUrl: './tagged.component.html',
  styleUrls: ['./tagged.component.scss'],
})
export class TaggedComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<AttendanceComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}