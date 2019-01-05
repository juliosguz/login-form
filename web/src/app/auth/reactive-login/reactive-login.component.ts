import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.scss']
})
export class ReactiveLoginComponent implements OnInit {

  username;
  password;
  loginForm;

  constructor() { }

  ngOnInit() {
    this.username = new FormControl();
    this.password = new FormControl();
  }

  login() {
    console.log('Username', this.username);
    console.log('Password', this.password);
  }

}
