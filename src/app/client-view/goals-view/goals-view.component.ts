import { Component, Input, OnInit } from "@angular/core";
import { Goals } from "../../models";

@Component({
  selector: "app-goals-view",
  template: `
    <div *ngIf="goalsSelector == 6 && goals">
      <app-title-view text="Goal"></app-title-view>
      <app-info info={{goals.goal}}></app-info>
      <app-title-view text="Other Decision Makers"></app-title-view>
      <app-info *ngFor="let maker of goals.otherDecisionMakers" info={{maker}}></app-info>
      <app-title-view text="What they want to be remembered for"></app-title-view>
      <app-info info={{goals.rememberedFor}}></app-info>
    </div>
    <div *ngIf="goalsSelector == 6 && !goals">
      No homes
    </div>
  `,
})
export class GoalsViewComponent implements OnInit {
  @Input("goals")
  goals: Goals;
  @Input("goalsSelector")
  goalsSelector: number;

  constructor() {}

  ngOnInit() {}
}
