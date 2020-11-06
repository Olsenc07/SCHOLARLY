import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  editForm = new FormGroup({
    major: new FormControl(''),
    sport: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
    relationship: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}
  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.editForm.value);
  }
}
