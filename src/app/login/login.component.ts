import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NavigateService} from '../navigate.service';

@Component({
  // moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, public navigate: NavigateService) {
    // this.username=""
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.navigate.goToHome();
    }
  }

  login(loginForm) {
    const username: string = loginForm.value.username;
    const password: string = loginForm.value.password;
    this.authService.getUserCredentials(username, password);
  }
}
