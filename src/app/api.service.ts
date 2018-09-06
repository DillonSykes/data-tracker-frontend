import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private headers =  new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }


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
      }
      else {

      }
    });
  }
}
