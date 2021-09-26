import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { GroupMembersComponent } from '../group-members/group-members.component';
import { FormControl } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-group-chats',
  templateUrl: './group-chats.component.html',
  styleUrls: ['./group-chats.component.scss']
})
export class GroupChatsComponent implements OnInit {
  faCoffee = faCoffee;
  MatBadgeModule;

  post = PostService.post$$;



  // filters members, not entirely neeeded...
  search: FormControl = new FormControl('');

  constructor(private _bottomSheet: MatBottomSheet) { }

  openChat(): void {
    this._bottomSheet.open(GroupMembersComponent);
  }

  ngOnInit(): void {
  }



}
