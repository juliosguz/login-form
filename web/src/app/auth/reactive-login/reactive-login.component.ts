import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.scss']
})
export class ReactiveLoginComponent implements OnInit {

  // username;
  // password;
  loginForm;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.username = new FormControl();
    // this.password = new FormControl();

    // this.loginForm = new FormGroup({
    //   username: new FormControl('juliosguz'),
    //   password: new FormControl('asdf')
    // });
    this.loginForm = this.fb.group({
      username: ['juliosguz', [Validators.required, Validators.email]],
      password: ['asdf', Validators.required]
    });
    // this.loginForm = new FormGroup()
  }

  login() {
    // console.log('Username', this.username);
    // console.log('Password', this.password);
    console.log('loginForm', this.loginForm, this.loginForm.value);
  }

}
