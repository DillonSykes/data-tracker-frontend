import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
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
        headers: { "x-access-token": this.authService.getToken() },
      })
      .subscribe((clients: any) => {
        this.clients = clients.body;
      });
    // this.clients = this.api.getAll("/session");
  }

  public getClientsName(i: number) {
    return this.clients[i].name;
  }
}
