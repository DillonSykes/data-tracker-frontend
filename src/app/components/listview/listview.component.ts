import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";

@Component({
  selector: "app-listview",
  template: `
    <div class="container">
      <button class="list-group-item list-group-item-action list-group-item-primary listview" (click)="displayClient()">{{text}}
      </button>
      <button class="btn btn-danger" (click)="deleteClient()">
        <i class="fa fa-trash"></i>
      </button>
    </div>`,
  styleUrls: ["./listview.component.css"],
})
export class ListviewComponent implements OnInit {
  @Input("text")
  text: string;
  @Input("id")
  id: string;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
  deleteClient() {
    // TODO add confirmation token
    this.apiService.deleteClient(this.id).subscribe(res => {
      window.location.reload();
    });
  }
  displayClient() {
    // TODO this needs to a navigation to a /id page
    window.location.assign("/clients/" + this.id);
  }
}
