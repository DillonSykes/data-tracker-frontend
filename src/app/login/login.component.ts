import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  // moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  constructor(private Api: ApiService) { }

  ngOnInit() {

  }

  login(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.Api.getUserCredentials(username, password);
  }
}
