import {Component, OnInit} from '@angular/core';
import {Person} from '../../models/person';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {NavigateService} from '../../navigate.service';
import {AuthService} from '../../auth.service';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.css']
})
export class NewSessionComponent implements OnInit {
  public dataService: DataService;
  public numberOfClients: number;
  public clients: Person[];
  public sessionId: string;
  constructor(private http: HttpClient, public navigate: NavigateService, public authService:  AuthService) {
    this.numberOfClients = 1;
    this.clients = [];
    this.clients.push(new Person());
  }

  ngOnInit() {
  }
  public setSessionId(id: string): void {
    this.sessionId = id;
  }
  public addSecondClient() {
    if (this.numberOfClients < 2) {
      this.numberOfClients++;
      this.clients.push(new Person());
    }
  }
  public deleteSecondClient() {
    if (this.numberOfClients > 1) {
      this.numberOfClients--;
      this.clients.pop();
    }
  }

  public save() {
    const client1 = this.clients[0];
    if (!client1.smoker) {
      client1.smoker_amount = 'N/A';
      client1.smoker = false;
    }

    console.log(client1);
    if (this.numberOfClients > 1) {
      const client2 = this.clients[1];
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
        client1: client1
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
    }


  }
}
