import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { Person } from "../../models";

@Component({
  selector: "app-person-form",
  template: `
    <fieldset ngModelGroup="person">
      <input type="text" class="form-control mb-2 mr-sm-2" [(ngModel)]="_person.first_name" (ngModelChange)="personChange" id="first#1"
             placeholder="First Name"
             name="first_name">
      <input type="text" class="form-control mb-2 mr-sm-2" [(ngModel)]="person.last_name" id="last#1" placeholder="Last Name"
             name="last_name">
      <div class="well">
        <div class="form-group">
          <label>Date of Birth</label>
          <input type="date" class="form-control" [(ngModel)]="person.date_of_birth" id="dob#1" placeholder="Date of Birth" name="dob">
        </div>
      </div>
      <div class="well">
      </div>
      <h4>Smoker</h4>
      <fieldset ngModelGroup="checkbox">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" (click)="this.toggle()" [(ngModel)]="person.smoker" aria-label="Checkbox for following text input"
                     name="smoker">
            </div>
          </div>
          <input *ngIf="this.isChecked()" [(ngModel)]="person.smoker_amount" type="text" class="form-control"
                 aria-label="Text input with checkbox"
                 placeholder="Amount..." name="amount">
        </div>
      </fieldset>
      <input type="text" class="form-control mb-2 mr-sm-2" [(ngModel)]="_person.health_concerns" id="health_concerns#1"
             placeholder="Health Concerns..."
             name="health_concerns">
    </fieldset>`,
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  styleUrls: ["./person-form.component.css"],
})
export class PersonFormComponent implements OnInit {
  public checked: boolean;
  public _person: Person;
  @Input()
  get person() {
    return this._person;
  }

  set person(val) {
    console.log(val);
    this._person = val;
    this.personChange.emit(this._person);
  }

  @Output()
  personChange = new EventEmitter();

  constructor() {
    this.checked = false;
  }

  ngOnInit() {}

  public isChecked() {
    // console.log(this.person);
    return this.checked;
  }

  public toggle() {
    this.checked = !this.checked;
  }
}
