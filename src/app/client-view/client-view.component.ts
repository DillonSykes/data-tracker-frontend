import { Component, OnInit } from "@angular/core";
import { Session } from "../models";
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
      <app-children-view [session]="session"></app-children-view>
    </div>`,
})
export class ClientViewComponent implements OnInit {
  session: any;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.session = {};
  }

  ngOnInit() {
    let id = "";
    this.route.params.subscribe(param => {
      id = param.id;
    });
    this.api.getById(id).subscribe(s => {
      this.session = s;
      this.session = { ...this.session, client_2: { first_name: "ANOTHER" } };
      console.log(s);
    });
  }

  multipleClients() {
    return !!this.session.client_2;
  }
}
