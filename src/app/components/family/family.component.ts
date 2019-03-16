import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Family, Session } from "../../models";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { NavigateService } from "../../navigate.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-family",
  template: `
    <button class="btn btn-success float-right" (click)="sync()">Sync</button>
    <div class="container h-100">
      <h3>Family</h3>
      <h4 *ngIf="twoClients">
        <button (click)="selectClient1()">{{client_1}}</button>
        or
        <button (click)="selectClient2()">{{client_2}}</button>
        Parents
      </h4>
      <h4 *ngIf="!twoClients">{{client_1}}'s Parents</h4>
      <h5 class="btn btn-primary">
        <button class="btn btn-success" (click)="selectMom()">Mom</button>
        <button class="btn btn-success" (click)="selectDad()">Dad</button>
      </h5>
      <h6>{{selectedClient}}'s info</h6>
      <div *ngIf="client1Selected" class="row h-100 justify-content-center align-items-center">
        <app-family-parents [(parent)]="client1Family.mom" *ngIf="!dadOptionSelected" name="Mom"></app-family-parents>
        <app-family-parents [(parent)]="client1Family.dad" *ngIf="dadOptionSelected" name="Dad"></app-family-parents>
      </div>
      <div *ngIf="client2Selected" class="row h-100 justify-content-center align-items-center">
        <app-family-parents [(parent)]="client2Family.mom" *ngIf="!dadOptionSelected" name="Mom"></app-family-parents>
        <app-family-parents [(parent)]="client2Family.dad" *ngIf="dadOptionSelected" name="Dad"></app-family-parents>
      </div>
    </div>
    <button class="btn btn-success float-right" (click)="save()">Save & Continue</button>`,
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
    private toastr: ToastrService,
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
      this.toastr.success("Family Saved");
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
