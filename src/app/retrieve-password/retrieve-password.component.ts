import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-retrieve-password',
  templateUrl: './retrieve-password.component.html',
  styleUrls: ['./retrieve-password.component.scss'],
})
export class RetrievePasswordComponent implements OnInit {
  password: FormControl = new FormControl('');
  email: FormControl = new FormControl('');

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor() {}

  ngOnInit(): void {}

  clearPassword(): void {
    this.password.setValue('');
  }

  clearEmail(): void {
    this.email.setValue('');
  }
  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.loginForm.value);
  }
}
