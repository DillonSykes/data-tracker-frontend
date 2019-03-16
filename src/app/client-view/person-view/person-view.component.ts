import { Component, Input, OnInit } from "@angular/core";
import { Person } from "../../models";

@Component({
  selector: "app-person-view",
  template: `
    <div>
      <app-title-view text="Name"></app-title-view>
      <app-info info={{getFullName()}}></app-info>
      <app-title-view text="Birth Date"></app-title-view>
      <app-info info={{person.date_of_birth}}></app-info>
      <app-title-view text="Smoker status"></app-title-view>
      <app-info info={{person.smoker}}></app-info>
      <app-title-view text="Smoking amount"></app-title-view>
      <app-info info={{person.smoker_amount}}></app-info>
      <app-title-view text="Health Concerns"></app-title-view>
      <app-info info={{person.health_concerns}}></app-info>
    </div>`,
})
export class PersonViewComponent implements OnInit {
  @Input("person")
  person: Person;

  constructor() {}

  ngOnInit() {}

  getFullName(): string {
    return `${this.person.first_name} ${this.person.last_name}`;
  }
}
