import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-retrieve-password',
  templateUrl: './retrieve-password.component.html',
  styleUrls: ['./retrieve-password.component.scss'],
})
export class RetrievePasswordComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    // TODO: wire up to login request
    console.log(this.loginForm.value);
  }
}
