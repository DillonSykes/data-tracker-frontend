import {Component, OnInit} from "@angular/core";
import {Person, Session} from "../../models";
import {ApiService} from "../../api.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: "app-client-info",
  template: `
    <h3 style="font-weight: bold">{{this.session.client_2 ? "Clients" : "Client"}}</h3>
    <div>
      <h4 *ngIf="this.session.client_2" style="font-weight: bold">Client 1</h4>
      <app-display-item *ngFor="let item of session.client_1 | keyvalue" text={{item.key}} info={{item.value}}></app-display-item>
    </div>
    <hr>
    <div *ngIf="this.session.client_2">
      <h4 style="font-weight: bold">Client 2</h4>
      <app-display-item *ngFor="let item of session.client_2 | keyvalue" text={{item.key}} info={{item.value}}></app-display-item>
      <hr>
    </div>
    <div>
      <h4 *ngIf="this.session.children" style="font-weight: bold">Children</h4>
      <div *ngFor="let child of session.children; let i = index">
        <h4>Child #{{i + 1}}</h4>
        <app-display-item *ngFor="let item of child | keyvalue" text={{item.key}} info={{item.value}}></app-display-item>
        <hr>
      </div>
    </div>
    <div>
      <h4 style="font-weight: bold">Child Care Taker</h4>
      <app-display-item *ngFor="let item of session.child_caretaker | keyvalue" text={{item.key}} info={{item.value}}></app-display-item>
    </div>
    <hr>
    <div>
      <h4 *ngIf="this.session.grandChildren" style="font-weight: bold">Grand Children</h4>
      <div *ngFor="let child of session.grandChildren; let i = index">
        <h4>Grand Child #{{i + 1}}</h4>
        <app-display-item *ngFor="let item of child | keyvalue" text={{item.key}} info={{item.value}}></app-display-item>
        <hr>
      </div>
    </div>
    <div>
      <h4 style="font-weight: bold">College Plans (out of 5)</h4>
      <app-display-item text="College Plans" info={{session.college_plans}}></app-display-item>
    </div>
    <hr>
    <div>
      <h4 style="font-weight: bold">Goals & More</h4>
      <app-display-item *ngFor="let item of session.goals | keyvalue" text={{item.key}} info={{item.value}}></app-display-item>
    </div>
    <hr>
    <div>
      <h4 style="font-weight: bold">Dwelling</h4>
      <div *ngIf="session.rental">
        <h5>Rental</h5>
        <app-display-item *ngFor="let item of session.rental | keyvalue" text={{item.key}} info={{item.value}}></app-display-item>
      </div>
      <hr>
      <div *ngIf="session.homes">
        <h5>{{session.homes.length > 1 ? "Homes" : "Home"}}</h5>
        <div *ngFor="let home of session.homes; let i = index">
          <h6 *ngIf="session.homes.length > 1">Home #{{i + 1}}</h6>
          <app-display-item *ngFor="let item of home | keyvalue" text={{item.key}} info={{item.value}}></app-display-item>
          <hr>
        </div>
      </div>
    </div>
    <button> Some</button>`,
  styleUrls: ["./client-info.component.css"],
})
export class ClientInfoComponent implements OnInit {
  public session: Session;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.session = {};
  }

  ngOnInit() {
    let id = "";
    this.route.params.subscribe(param => {
      id = param.id;
    });
    console.log(id);
    this.api.getById(id).subscribe(s => {
      this.session = s;
    });
  }

  mapToVm() {
    console.log(this.session);
  }
}
