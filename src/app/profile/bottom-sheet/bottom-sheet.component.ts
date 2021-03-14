import { Component } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-profile-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
})
export class ProfileBottomSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ProfileBottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    // TODO: add whatever code you want to happen with the clicked sheet row
    this._bottomSheetRef.dismiss();
  }
}

