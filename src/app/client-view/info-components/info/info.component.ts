import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-info",
  template: `<div><label>{{info}}</label></div>`,
})
export class InfoComponent implements OnInit {
  @Input("info")
  info: string;
  constructor() {}

  ngOnInit() {}
}
