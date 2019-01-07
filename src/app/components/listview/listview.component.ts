import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-listview",
  templateUrl: "./listview.component.html",
  styleUrls: ["./listview.component.css"],
})
export class ListviewComponent implements OnInit {
  @Input("text")
  text: string;
  constructor() {}

  ngOnInit() {}
}