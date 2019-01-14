import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "app-display-item",
  styleUrls: ["./display-item.component.css"],
  template: `
    <div>
      <label style="font-weight: bold">{{text}}</label>
      <p>{{info}}</p>
    </div>
  `
})
export class DisplayItemComponent implements OnInit {
  @Input("text") text: string;
  @Input("info") info: string;
  constructor() {
  }

  ngOnInit() {
  }
}
