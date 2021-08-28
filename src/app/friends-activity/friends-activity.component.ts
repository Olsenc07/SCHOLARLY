import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-friends-activity',
  templateUrl: './friends-activity.component.html',
  styleUrls: ['./friends-activity.component.scss']
})
export class FriendsActivityComponent implements OnInit {

  feeds = [{
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  },
  {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  }, {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  }, {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  }, {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  },
  ];

  mutuals = [{
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  },
  {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  }, {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  },
  {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  },
  {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  }];

  following = [{
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  },
  {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  }, {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  },
  {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  },
  {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  }];
  followers = [{
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  },
  {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  }, {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  },
  {
    "profilePic": "", "userName": "",
    "Major": "", "Minor": "", "Sport": "", "Club": ""
  }];

  // Friend requests from the card...
  accept: FormControl = new FormControl('');
  deline: FormControl = new FormControl('');

  // Needs an observabel to adapt to changes. 
  // Since this search is just filtering
  // filters members, not entirely neeeded...
  search: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
