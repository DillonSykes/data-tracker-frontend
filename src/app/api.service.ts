import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import * as luxon from 'luxon';
// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private headers =  new HttpHeaders({'Content-Type': 'application/json'});
  public loggedInStatus = false;
  constructor(private http: HttpClient, private router: Router) { }
  // public isAuthenticated(): boolean {
  //
  //   const token =  localStorage.getItem('token');
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
  getUserCredentials(username: string, password: string) {
    // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    this.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('https://h1g05j5tmg.execute-api.us-east-1.amazonaws.com/dev/users/login', {
      name : username,
      password: password
    }).subscribe(res => {
      const data: any = res;
      if (data.auth === true) {
        this.router.navigateByUrl('/home');
        this.loggedInStatus = this.isLoggedIn();
        console.log(data);

      } else {
        window.alert('Loggin Failed');
      }
    });
  }
  getLoginStatus() {
    return this.loggedInStatus;
  }
  private setSession(authResult) {
    const expiresAt = luxon.add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return luxon.isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return luxon(expiresAt);
  }
}
