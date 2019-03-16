import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-hr-btn-group",
  template: `
    <div class="btn-group" role="group" aria-label="Basic example">
      <button (click)="this.switch(1)" type="button" class="btn btn-secondary">Children</button>
      <button (click)="this.switch(-1)" type="button" class="btn btn-secondary">GrandChildren</button>
    </div>`,
})
export class HrBtnGroupComponent implements OnInit {
  @Output()
  child = new EventEmitter<number>();
  public isChild: number;

  constructor() {
    this.isChild = 0;
  }

  switch(state: number) {
    this.child.emit(state);
    this.isChild = state;
  }

  ngOnInit() {}
}
