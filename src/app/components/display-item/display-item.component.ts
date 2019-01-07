import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "app-display-item",
  styleUrls: ["./display-item.component.css"],
  template: `
    <div>
      <label>{{text}}</label>
      <textarea>{{info}}</textarea>
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
