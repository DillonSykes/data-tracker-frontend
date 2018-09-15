import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as moment from 'moment';
import {NavigateService} from './navigate.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private headers =  new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient, public navigate: NavigateService) { }
  // public isAuthenticated(): boolean {
  //
  //   const token =  localStorage.getItem('token');
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
  getUserCredentials(username: string, password: string, ) {
    // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    this.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('https://h1g05j5tmg.execute-api.us-east-1.amazonaws.com/dev/users/login', {
      name : username,
      password: password
    }).subscribe(res => {
      const data: any = res;
      console.log(data);
      if (data.auth === true) {
        this.setSession(data);
        this.navigate.goToHome();
      } else {
        window.alert('Loggin Failed');
      }
    });
  }
  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.navigate.goToLogin();
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
