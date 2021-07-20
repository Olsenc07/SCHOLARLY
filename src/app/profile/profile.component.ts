import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  // Connecting store.servie to display course in profile. 
  // Edit profile -> store -> profile

  profile$$ = StoreService.profile$$

  showFiller = false;
  // TODO: initial following value would need to be loaded from database - for now, always start with false
  following = false;
  constructor(private bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

  followClicked(): void {
    this.following = !this.following;
  }
  // Why does this addition delay the right chip from displaying in html????????
  // Wok on home pages htmls form controls!!!!!!
  // Does this need its own form group? Triggered at the same time?
  // messageRequest: FormControl = new FormControl('');

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

