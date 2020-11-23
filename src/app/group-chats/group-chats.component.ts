import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-group-chats',
  templateUrl: './group-chats.component.html',
  styleUrls: ['./group-chats.component.scss']
})
export class GroupChatsComponent implements OnInit {
  faCoffee = faCoffee;

  constructor() { }

  ngOnInit(): void {
  }

}
