import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-title-view",
  template: `<div>
    <label style="font-weight: bold">{{text}}</label>
  </div>`,
})
export class TitleComponent implements OnInit {
  @Input("text")
  text: string;
  constructor() {}

  ngOnInit() {}
}
