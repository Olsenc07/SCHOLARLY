import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-group-chats',
  templateUrl: './group-chats.component.html',
  styleUrls: ['./group-chats.component.scss']
})
export class GroupChatsComponent implements OnInit {
  faCoffee = faCoffee;
  MatBadgeModule;

  constructor(private _bottomSheet: MatBottomSheet) { }

  openChat(): void {
    this._bottomSheet.open(GroupMembersComponent);
  }

  ngOnInit(): void {
  }



}
@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.scss']
})

export class GroupMembersComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<GroupMembersComponent>) { }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}