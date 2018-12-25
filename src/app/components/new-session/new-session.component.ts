import { Component, OnInit } from "@angular/core";
import { Person, Session, smokerPropertyCleaner } from "../../models";
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
  public clients: Person[];
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
    const client1 = smokerPropertyCleaner(this.clients[0]);
    let session: Session = new Session(client1);
    if (this.numberOfClients > 1) {
      const client2 = smokerPropertyCleaner(this.clients[1]);
      session = { ...session, client_2: client2 };
      this.store.dispatch(new SessionActions.AddSession(session));
      this.navigate.goToChildren();
    } else {
      console.log("This is my client1: ", client1);
      console.log("This is my session: ", session);
      this.store.dispatch(new SessionActions.AddSession(session));
      this.navigate.goToChildren();
    }
  }
}
