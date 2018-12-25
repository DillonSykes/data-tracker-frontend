import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Parent } from "../../models/family";

@Component({
  selector: "app-family-parents",
  templateUrl: "./family-parents.component.html",
  styleUrls: ["./family-parents.component.css"],
})
export class FamilyParentsComponent implements OnInit {
  public _parent: Parent;
  @Input("name")
  name: string;
  @Input()
  get parent() {
    return this._parent;
  }

  set parent(val) {
    console.log(val);
    this._parent = val;
    this.parentChange.emit(this._parent);
  }

  @Output()
  parentChange = new EventEmitter();
  constructor() {
    // this._parent = new Parent();
  }

  ngOnInit() {}
}
