import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(public router: Router) { }
  public goToHome() {
    this.router.navigateByUrl('/home').then().catch((error) => {
      console.log(error);
    });
  }
  public goToNewSession() {
    this.router.navigateByUrl('/new-session').then().catch((error) => {
      console.log(error);
    });
  }
  public goToLogin() {
    this.router.navigateByUrl('/login').then().catch((error) => {
      console.log(error);
    });
  }
  public goToChildren(sessionId: string) {
    this.router.navigateByUrl('/children?sessionId=' + sessionId).then().catch((error) => {
      console.log(error);
    });
  }

  public goToGrandChildren(sessionId: string) {
    this.router.navigateByUrl('/grandchildren?sessionId=' + sessionId).then().catch((error) => {
      console.log(error);
    });
  }
  public goToCareTaker(sessionId: string) {
    this.router.navigateByUrl('/caretaker?sessionId=' + sessionId).then().catch((error) => {
      console.log(error);
    });
  }
}
