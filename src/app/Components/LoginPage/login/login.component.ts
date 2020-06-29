import { Component, OnInit } from '@angular/core';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { login, logout } from 'src/app/Store/actions/auth.actions';
import { IAppState } from 'src/app/Store/state/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faKey = faKey;
  loginForm;

  constructor(private formBuilder: FormBuilder, private store: Store<IAppState>, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(loginFormData) {
    this.store.dispatch(login({
      data: {
        username: loginFormData.username,
        password: loginFormData.password
      }
    }));
  }

  onLogout() {
    this.store.dispatch(logout());
  }
}
