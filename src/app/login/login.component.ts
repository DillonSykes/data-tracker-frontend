import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavigateService } from '../navigate.service';


@Component({
  // moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, public navigate: NavigateService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.navigate.goToHome();
    }
  }

  login(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.authService.getUserCredentials(username, password);
  }
}
