import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
    selector: 'app-group-members',
    templateUrl: './group-members.component.html',
    styleUrls: ['./group-members.component.scss']
})

export class GroupMembersComponent implements OnInit {

    constructor(private bottomSheetRef: MatBottomSheetRef<GroupMembersComponent>) { }
    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
    ngOnInit(): void { }

}