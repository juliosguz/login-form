import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  login(form) {
    this.http
      .post('http://localhost:3000/auth/login', form.value)
      .toPromise()
      .then(data => {
        console.log('[THEN]: ', data);
      })
      .catch(error => {
        console.log('[CATCH]: ', error.error);
      });
  }

}
