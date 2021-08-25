import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { StoreService } from '../services/store.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // Connecting store.servie to display course in profile. 
  // Edit profile -> store -> profile

  profile$$ = StoreService.profile$$;

  Com_ = StoreService.Com.length;
  Com = StoreService.Com
  Pur = StoreService.Pur.length;

  showFiller = false;
  // TODO: initial following value would need to be loaded from database - for now, always start with false
  following = false;


  // fill from saved data
  // Testing scroll
  // completed = [
  //   'MAT321Y1', 'MAT321Y1', 'MAT321Y1', 'MAT321Y1', 'MAT321Y1', 'MAT321Y1', 'MAT321Y1', 'MAT321Y1', 'MAT321Y1',
  //   '21Y1', 'MAT321Y1', 'MAT321Y1', 'AT321Y1', 'T321Y1',
  //   'MAT321Y1', 'MAT321Y1', 'MAT321Y1', 'MAT321Y1',];

  // filled in from data base
  // View breaks if any more are loaded in..
  groups = ['', '', '', '', '', '', '', ''];


  posts = [{
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  },
  {
    "profilePic": "", "Title": "",
    "Specific": "", "Location": "", "Date": "", "Upload": ""
  }
  ];

  showCases = ['../../assets/Pics/IMG-8413.PNG', '../../assets/Pics/IMG-8619.PNG',
    '../../assets/Pics/IMG-8413.PNG', '../../assets/Pics/IMG-8413.PNG', '../../assets/Pics/IMG-8619.PNG',
    '../../assets/Pics/IMG-8413.PNG', '../../assets/Pics/IMG-8413.PNG'
  ];



  constructor(private bottomSheet: MatBottomSheet) {
    // profile$$.profile$$.subscribe((profile) => {
    //   // this.profile$$ = profile;
    //   // return name;
    // })
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

  followClicked(): void {
    this.following = !this.following;
  }
  ngOnInit(): any {
    this.Com = this.Com.sort()
    return this.Com
  }

}
@Component({
  selector: 'app-profile',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

