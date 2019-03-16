import { Component, OnInit } from "@angular/core";
import {IPerson, Person, Session } from "../../models";
import { HttpClient } from "@angular/common/http";
import { NavigateService } from "../../navigate.service";
import { AuthService } from "../../auth.service";
import { DataService } from "../../data.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import * as SessionActions from "../../actions";

@Component({
  selector: "app-new-session",
  templateUrl: "./new-session.component.html",
  styleUrls: ["./new-session.component.css"],
})
export class NewSessionComponent implements OnInit {
  public numberOfClients: number;
  public clients: IPerson[];
  constructor(
    private store: Store<AppState>,
    public navigate: NavigateService,
    public authService: AuthService,
  ) {
    this.numberOfClients = 1;
    this.clients = [];
    this.clients.push(new Person());
  }

  ngOnInit() {}

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
    let session: Session = new Session(this.clients[0]);
    if (this.numberOfClients > 1) {
      session = { ...session, client_2: this.clients[1] };
    }
    this.store.dispatch(new SessionActions.AddSession(session));
    this.navigate.goToChildren();
  }
}
