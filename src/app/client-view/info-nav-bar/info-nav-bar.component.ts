import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ClientView } from "../../enums";
@Component({
  selector: "app-info-nav-bar",
  template: `
    <div class="btn-group" role="group" aria-label="Basic example">
      <button (click)="this.switch(view.CHILDREN)" type="button" class="btn btn-secondary">Children</button>
      <button (click)="this.switch(1)" type="button" class="btn btn-secondary">GrandChildren</button>
      <button (click)="this.switch(2)" type="button" class="btn btn-secondary">Homes</button>
      <button (click)="this.switch(3)" type="button" class="btn btn-secondary">Rentals</button>
      <button (click)="this.switch(4)" type="button" class="btn btn-secondary">Assets</button>
      <button (click)="this.switch(5)" type="button" class="btn btn-secondary">Child Caretaker</button>
      <button (click)="this.switch(6)" type="button" class="btn btn-secondary">Goals</button>
    </div>`,
})
export class InfoNavBarComponent implements OnInit {
  @Output()
  btnSelector = new EventEmitter<number>();

  constructor(protected view: ClientView) {}

  ngOnInit() {}

  switch(state: number) {
    this.btnSelector.emit(state);
  }
}
