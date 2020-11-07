import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  MatIconModule;

  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  major: FormControl = new FormControl('');
  sport: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  birthday: FormControl = new FormControl('');
  gender: FormControl = new FormControl('');
  relationship: FormControl = new FormControl('');

  signupForm = new FormGroup({
    username: this.username,
    password: this.password,
    major: this.major,
    sport: this.sport,
    name: this.name,
    gender: this.gender,
    relationship: this.relationship,
  });

  constructor() {}

  ngOnInit(): void {}

  clearUsername(): void {
    this.username.setValue('');
  }

  clearPassword(): void {
    this.password.setValue('');
  }

  clearMajor(): void {
    this.major.setValue('');
  }

  clearSport(): void {
    this.sport.setValue('');
  }

  clearName(): void {
    this.name.setValue('');
  }

  clearGender(): void {
    this.gender.setValue('');
  }

  clearRelationship(): void {
    this.relationship.setValue('');
  }
  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.signupForm.value);
  }
}
