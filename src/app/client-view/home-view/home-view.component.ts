import { Component, Input, OnInit } from "@angular/core";
import { Own } from "../../models/dwelling";

@Component({
  selector: "app-home-view",
  template: `
    <div *ngIf="homeSelector == 2 && homes">
      <div *ngFor="let home of homes; let i = index">
        <app-title-view text="Home #{{i + 1}}"></app-title-view>
        <app-title-view text="Value"></app-title-view>
        <app-info info={{home.value}}></app-info>
        <app-title-view text="Owe"></app-title-view>
        <app-info info={{home.owe}}></app-info>
        <app-title-view text="Type of property"></app-title-view>
        <app-info info={{home.type}}></app-info>
        <app-title-view text="Monthly Payment"></app-title-view>
        <app-info info={{home.payment}}></app-info>
        <app-title-view text="Home owner insurance"></app-title-view>
        <app-info info={{home.homeOwnerInsurance}}></app-info>
        <app-title-view *ngIf="home.homeOwnerInsurance" text="Whats included in the insurance"></app-title-view>
        <app-info *ngIf="home.homeOwnerInsurance" info={{home.whatsIncluded}}></app-info>
      </div>
    </div>
    <div *ngIf="homeSelector == 2 && !homes">
      No homes
    </div>
  `,
})
export class HomeViewComponent implements OnInit {
  @Input("homes")
  homes: Own[];
  @Input("homeSelector")
  homeSelector: number;

  constructor() {}

  ngOnInit() {}
}
