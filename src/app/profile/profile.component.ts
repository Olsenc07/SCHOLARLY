import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProfileBottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  showFiller = false;
  // TODO: initial following value would need to be loaded from database - for now, always start with false
  following = false;
  constructor(private _BOTTOMSHEET: MatBottomSheet) {}

  openBottomSheet(): void {
    this._BOTTOMSHEET.open(ProfileBottomSheetComponent);
  }

  followClicked(): void {
    this.following = !this.following;
  }
}
