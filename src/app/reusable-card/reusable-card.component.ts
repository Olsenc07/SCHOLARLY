import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
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
    selectedAttend: string = '';
    attendances: any = [
        'Attending', 'Maybe', 'Not Attending'
    ];
    radioChange(event: any) {
        this.selectedAttend = event.target.value;
    }


    panelOpenState = false;
    constructor(private bottomSheet: MatBottomSheet) { }
}

