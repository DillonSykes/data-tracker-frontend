import { Component, Input, OnInit } from "@angular/core";
import { Session } from "../../models";

@Component({
  selector: "app-children-view",
  template: `
    <div *ngIf="session.children && childSelector == 0 ">
      <div *ngFor="let child of session.children">
        <app-person-view [person]=child></app-person-view>
      </div>
    </div>
    <div *ngIf="!session.children && childSelector == 0">
      No children data
    </div>
    <div *ngFor="let grandchild of session.grandChildren">
      <app-person-view *ngIf="childSelector == 1" [person]=grandchild></app-person-view>
    </div>`,
})
export class ChildrenViewComponent implements OnInit {
  @Input("session")
  session: Session;
  @Input("childSelector")
  childSelector: number;

  constructor() {}

  ngOnInit() {}
}
