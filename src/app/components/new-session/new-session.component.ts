import { Component, OnInit } from "@angular/core";
import { Person, Session } from "../../models";
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
  public dataService: DataService;
  public numberOfClients: number;
  public clients: Person[];
  public sessionId: string;
  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
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
    const client1 = this.clients[0];
    if (!client1.smoker) {
      client1.smoker_amount = "N/A";
      client1.smoker = false;
    }
    let session: Session = new Session(client1);
    if (this.numberOfClients > 1) {
      const client2 = this.clients[1];
      if (!client2.smoker) {
        client2.smoker_amount = "N/A";
        client2.smoker = false;
      }
      session = { ...session, client_2: client2 };
      this.store.dispatch(new SessionActions.AddSession(session));
      this.navigate.goToChildren("s");
    } else {
      console.log("This is my client: ", client1);
      console.log("This is my session: ", session);
      this.store.dispatch(new SessionActions.AddSession(session));
      this.navigate.goToChildren("s");
    }
  }
}
