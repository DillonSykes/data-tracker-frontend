import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";
import { NavigateService } from "../../navigate.service";

@Component({
  selector: "app-home",
  template: `
    <!--<button (click)="this.navigate.goToNewSession()" type="button" class="btn btn-primary btn-lg form-control" style="height: 100%">
      Create Session
    </button>-->
    <!--<button type="button" class="btn btn-primary btn-lg form-control">Clients</button>-->
    <div class="split left">
      <div class="centered">
        <button class="btn btn-primary btn-lg form-control" (click)="this.navigate.goToNewSession()">Create Session
        </button>
      </div>
    </div>

    <div class="split right">
      <div class="centered">
        <button type="button" class="btn btn-primary btn-lg form-control" (click)="this.navigate.goToClients()">Clients</button>
      </div>
    </div>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    public authService: AuthService,
    public navigate: NavigateService,
  ) {}

  ngOnInit() {}
}
