import { Component } from '@angular/core';
import {MatBottomSheet  } from '@angular/material/bottom-sheet';
import { AttendanceComponent } from '../main-pages/main-pages.component';

@Component({
    selector: 'app-card',
    templateUrl: './reusable-card.component.html',
    styleUrls: ['./reusable-card.component.scss'],
})
export class ReusableCardComponent {
    openAttendanceSheet(): void {
        this.bottomSheet.open(AttendanceComponent);
      }


constructor(private bottomSheet: MatBottomSheet){}
}

