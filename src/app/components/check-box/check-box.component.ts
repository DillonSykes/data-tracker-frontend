import {Component, OnInit} from "@angular/core";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: "app-check-box",
  template: `
    <h4>Smoker</h4>
    <fieldset ngModelGroup="checkbox">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input type="checkbox" (click)="this.toggle()" ngModel aria-label="Checkbox for following text input" name="smoker">
          </div>
        </div>
        <input *ngIf="this.isChecked()" ngModel type="text" class="form-control" aria-label="Text input with checkbox"
               placeholder="Amount..." name="amount">
      </div>
    </fieldset>`,
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
  styleUrls: ["./check-box.component.css"]
})
export class CheckBoxComponent implements OnInit {
  public checked: boolean;

  constructor() {
    this.checked = false;
  }

  ngOnInit() {
  }

  public isChecked() {
    return this.checked;
  }

  public toggle() {
    this.checked = !this.checked;
  }

}
