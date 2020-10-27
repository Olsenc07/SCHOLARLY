import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  MatIconModule;
  signupForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    major: new FormControl(''),
    sport: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
    gender: new FormControl(''),
    relationship: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.signupForm.value);
  }
}
