import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Person, Session } from "../../models";

@Component({
  selector: "app-children-view",
  template: `
    <div>
      <app-hr-btn-group (child)="switch($event)"></app-hr-btn-group>
    </div>
    <div *ngFor="let child of session.children">
      <app-person-view *ngIf="childSelector == 1" [person]=child></app-person-view>
    </div>
    <div *ngFor="let grandchild of session.grandChildren">
      <app-person-view *ngIf="childSelector == -1" [person]=grandchild></app-person-view>
    </div>`,
})
export class ChildrenViewComponent implements OnInit {
  @Input("session")
  session: Session;
  public childSelector: number;
  constructor() {
    this.childSelector = 0;
  }

  switch(state: number) {
    this.childSelector = state;
    console.log(this.session);
  }

  ngOnInit() {}
}
