import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginRequest {
  token: string;
}

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
    private router: Router,
    private http: HttpClient,
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
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.loginForm = new FormGroup()
  }

  login() {
    this.http
      .post('http://localhost:3000/auth/login', this.loginForm.value)
      .toPromise()
      .then((data: LoginRequest) => {
        console.log('[THEN]: ', data);
        localStorage.setItem('authToken', data.token);
        this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        console.log('[CATCH]: ', error.error);
      });
  }
}

