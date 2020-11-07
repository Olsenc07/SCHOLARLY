import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  major: FormControl = new FormControl('');
  sport: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  birthday: FormControl = new FormControl('');
  relationship: FormControl = new FormControl('');
  gender: FormControl = new FormControl('');

  editForm = new FormGroup({
    major: this.major,
    sport: this.sport,
    name: this.name,
    birthday: this.birthday,
    relationship: this.relationship,
    gender: this.gender,
  });

  constructor() {}

  ngOnInit(): void {}

  clearMajor(): void {
    this.major.setValue('');
  }

  clearSport(): void {
    this.sport.setValue('');
  }

  clearName(): void {
    this.name.setValue('');
  }

  clearBirthday(): void {
    this.birthday.setValue('');
  }

  clearRelationship(): void {
    this.relationship.setValue('');
  }

  clearGender(): void {
    this.gender.setValue('');
  }

  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.editForm.value);
  }
}
