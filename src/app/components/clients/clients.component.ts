import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../api.service";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {Session} from "../../models";

@Component({
  selector: "app-clients",
  template: `<h4>Clients</h4>
  <div class="input-group col-md-4">
    <input class="form-control py-2" type="search" placeholder="search coming soon" id="example-search-input">
    <span class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">
            <i class="fa fa-search"></i>
        </button>
      </span>
  </div>

  <app-listview *ngFor="let client of clients; let i = index" text={{getClientsName(i)}} (click)="displayInfo(i)"></app-listview>`,
  styleUrls: ["./clients.component.css"],
})
export class ClientsComponent implements OnInit {
  public clients: any[];

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private authService: AuthService,
  ) {
    this.clients = [];
  }

  ngOnInit() {
    this.http
      .get(environment.API_ENDPOINT + "/session", {
        headers: {"x-access-token": this.authService.getToken()},
      })
      .subscribe((clients: any) => {
        this.clients = clients.body;
      });
    // this.clients = this.api.getAll("/session");
  }

  public getClientsName(i: number) {
    return this.clients[i].name;
  }

  displayInfo(i: any) {
    // TODO this needs to a navigation to a /id page
    const id: string = this.clients[i].id;
    console.log(this.clients);
    window.location.assign("/clients/" + id);
  }
}
