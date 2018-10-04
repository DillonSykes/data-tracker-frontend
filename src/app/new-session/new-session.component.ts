import {Component, OnDestroy, OnInit} from '@angular/core';
import { Person } from '../models/person';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NavigateService} from '../navigate.service';
import {AuthService} from '../auth.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.css']
})
export class NewSessionComponent implements OnInit, OnDestroy {
  public dataService: DataService;
  public numberOfClients: number;
  public sessionId: string;
  constructor(private http: HttpClient, public navigate: NavigateService, public authService:  AuthService) {
    this.numberOfClients = 1;
  }

  ngOnInit() {
  }
  public setSessionId(id: string): void {
    this.sessionId = id;
  }
  public addSecondClient() {
    if (this.numberOfClients < 2) {
      this.numberOfClients++;
    }
  }
  public deleteSecondClient() {
    if (this.numberOfClients > 1) {
      this.numberOfClients--;
    }
  }

  public save(form1, form2) {
    const formValue1 = form1.value;
    const formValue2 = form2.value;
    // console.log(form.value.first_name);
    // console.log(form.value.checkbox.smoker);
    // console.log(form.value.checkbox.amount);
    // console.log(form1.value);
    // console.log(form2.value);
    const client1: Person = {
      first_name: formValue1.person.first_name,
      last_name: formValue1.person.last_name,
      date_of_birth: formValue1.person.dob,
      smoker: formValue1.checkbox.smoker,
      smoker_amount: formValue1.checkbox.amount,
      health_concerns: formValue1.person.health_concerns,
    };
    if (!client1.smoker) {
      client1.smoker_amount = 'N/A';
      client1.smoker = false;
    }

    console.log(client1);
    if (this.numberOfClients > 1) {
      const client2: Person = {
        first_name: formValue2.first_name,
        last_name: formValue2.last_name,
        date_of_birth: formValue2.dob,
        smoker: formValue2.checkbox.smoker,
        smoker_amount: formValue2.checkbox.amount,
        health_concerns: formValue2.health_concerns,
      };
      if (!client2.smoker) {
        client2.smoker_amount = 'N/A';
        client2.smoker = false;
      }
      this.http.post(environment.API_ENDPOINT + '/session/new',
        {
          token: this.authService.getToken(),
          client1: client1,
          client2: client2
        }).subscribe( res => {
        const data: any = res;
        if ( data.status === true) {
          // window.alert('Saved.');
          this.sessionId = data.sessionId;
          console.log(this.sessionId);
          this.navigate.goToChildren(data.sessionId);

          // TODO create toast
        } else {
          window.alert('DIDNt work');
          // TODO create toast
        }
      });
    } else {
      const body: any = {
        client1
      };
      console.log(body);
      this.http.post(environment.API_ENDPOINT + '/session/new',
        {
          token: this.authService.getToken(),
          client1: client1
        }).subscribe( res => {
          const data: any = res;
          console.log(data);
          if ( data.status === true) {
            this.setSessionId(data.sessionId);
            console.log(this.sessionId);
            this.navigate.goToChildren(data.sessionId);
            // TODO create toast
          } else {
            window.alert('DIDNt work');
            // TODO create toast
          }
      });
      console.log('is it still here? ', this.sessionId);
    }


  }

  ngOnDestroy(): void {
    console.log(this.sessionId);
    // this.dataService.sessionId = this.sessionId;
  }
}
