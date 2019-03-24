import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ApiService } from "../../api.service";
import { ToastrService } from "ngx-toastr";

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
  @Output()
  deletedSessionId = new EventEmitter<string>();
  @Input("text")
  text: string;
  @Input("id")
  id: string;

  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit() {}
  deleteClient() {
    const deleteItem = confirm("Are you sure?");
    if (deleteItem) {
      // TODO add confirmation token
      this.apiService.deleteClient(this.id).subscribe(res => {
        this.deletedSessionId.emit(res.id);
        this.toastr.success("Deleted");
      });
    }
  }
  displayClient() {
    // TODO this needs to a navigation to a /id page
    window.location.assign("/clients/" + this.id);
  }
}
