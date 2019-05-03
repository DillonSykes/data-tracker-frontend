import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-client-view",
  template: `
    <div>
      <h3>{{multipleClients() ? "Clients" : "Client"}}</h3>
      <table>
        <th style="padding-right: 50px">
            <app-person-view *ngIf="multipleClients()" [person]=session.client_2></app-person-view>
        </th>
        <th>
          <app-person-view [person]=session.client_1></app-person-view>
        </th>
      </table>
      <app-info-nav-bar (btnSelector)="switch($event)"></app-info-nav-bar>
      <app-children-view childSelector={{this.selector}} [session]="session"></app-children-view>
      <app-home-view [homes]="session.homes" homeSelector={{this.selector}}></app-home-view>
      <app-rental-view [rental]="session.rental" rentalSelector={{this.selector}}></app-rental-view>
      <app-goals-view [goals]="session.goals" goalsSelector={{this.selector}}></app-goals-view>
    </div>`,
})
export class ClientViewComponent implements OnInit {
  session: any;
  selector: number;
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.session = {};
    this.selector = -1;
  }

  ngOnInit() {
    let id = "";
    this.route.params.subscribe(param => {
      id = param.id;
    });
    this.api.getById(id).subscribe(s => {
      this.session = s;
      // TODO remove me
      this.session = { ...this.session, client_2: { first_name: "ANOTHER" } };
      console.log(s);
    });
  }

  multipleClients() {
    return !!this.session.client_2;
  }
  switch(state: number) {
    console.log(state);
    this.selector = state;
  }
}
