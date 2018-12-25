import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Family, Session } from "../../models";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { NavigateService } from "../../navigate.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AuthService } from "../../auth.service";

@Component({
  selector: "app-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.css"],
})
export class FamilyComponent implements OnInit {
  public dadOptionSelected: boolean;
  public momOptionSelected: boolean;
  public session: Observable<Session>;
  public client_1: string;
  public client_2: string;
  public client1Family: Family;
  public client2Family: Family;
  public twoClients: boolean;
  public client1Selected: boolean;
  public client2Selected: boolean;
  public selectedClient: string;
  constructor(
    private store: Store<AppState>,
    private navigate: NavigateService,
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.dadOptionSelected = false;
    this.momOptionSelected = false;
    this.session = store.select("session");
    this.client1Family = new Family();
    this.client1Selected = true;
    this.client2Selected = false;
    this.client2Family = new Family();
    this.session.subscribe(session => {
      this.client_1 = session.client_1.first_name;
      if (!session.client_2) {
        this.twoClients = false;
      } else {
        this.twoClients = true;
        this.client_2 = session.client_2.first_name;
        this.client2Family = new Family();
      }
    });
    this.selectedClient = this.client_1;
  }

  ngOnInit() {}

  public selectMom() {
    this.dadOptionSelected = false;
    this.momOptionSelected = true;
  }
  public selectDad() {
    this.dadOptionSelected = true;
    this.momOptionSelected = false;
  }
  public selectClient1() {
    this.client1Selected = true;
    this.client2Selected = false;
    this.selectedClient = this.client_1;
  }

  public selectClient2() {
    this.client1Selected = false;
    this.client2Selected = true;
    this.selectedClient = this.client_2;
  }
  public save() {
    this.session.subscribe(session => {
      const sessionState = session;
      sessionState.client1Family = this.client1Family;
      if (this.twoClients) {
        sessionState.client2Family = this.client2Family;
      }
      alert("More to be done with family questions");
    });
  }
  public sync() {
    this.session.subscribe(session => {
      this.http
        .post(environment.API_ENDPOINT + "/session", session, {
          headers: { "x-access-token": this.authService.getToken() },
        })
        .subscribe(res => {
          console.log(res);
        });
    });
  }
}
