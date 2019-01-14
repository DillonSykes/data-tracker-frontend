import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "app-listview",
  template: `
    <div class="container">
      <button class="list-group-item list-group-item-action list-group-item-primary listview">{{text}}
      </button>
      <button class="btn btn-danger">
        <i class="fa fa-trash"></i>
      </button>
    </div>`,
  styleUrls: ["./listview.component.css"],
})
export class ListviewComponent implements OnInit {
  @Input("text")
  text: string;

  constructor() {
  }

  ngOnInit() {
  }
}
