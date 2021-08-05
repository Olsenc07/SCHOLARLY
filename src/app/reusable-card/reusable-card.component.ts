import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AttendanceComponent } from '../main-pages/main-pages.component';
import { TaggedComponent } from '../main-pages/main-pages.component';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-card',
    templateUrl: './reusable-card.component.html',
    styleUrls: ['./reusable-card.component.scss'],
})
export class ReusableCardComponent {

    post$$ = PostService.post$$;
    gender$ = PostService.gender$;
    booleans$ = PostService.booleans$;
    event$ = PostService.event$;





    openAttendanceSheet(): void {
        this.bottomSheet.open(AttendanceComponent);
    }
    openTaggedSheet(): void {
        this.bottomSheet.open(TaggedComponent);
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

