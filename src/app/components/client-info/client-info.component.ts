import { Component, OnInit } from "@angular/core";
import { Person, Session } from "../../models";
import { ApiService } from "../../api.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-client-info",
  template: `
    <div>
      <app-display-item *ngFor="let item of session | keyvalue" text={{item.key}} info={{item.value}}>
      <app-display-item> *ngFor="let nestedItem of item</app-display-item>
      </app-display-item>
    </div>
  <button (click)="mapToVm(sessionOb)"> Some</button>`,
  styleUrls: ["./client-info.component.css"],
})
export class ClientInfoComponent implements OnInit {
  public sessionOb: Observable<Session>;
  public session: Session;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.session = {};
    this.mapToVm();
  }

  ngOnInit() {
    let id = "";
    this.route.params.subscribe(param => {
      id = param.id;
    });
    console.log(id);
    this.sessionOb = this.api.getById(id);
    this.sessionOb.subscribe(s => {
      this.session = s;
    });
  }
  mapToVm() {
    console.log(this.session);
    const session = {
      ["Client 1"]: this.session.client_1.first_name + this.session.client_1.last_name,
    };
    console.log(session);
  }
}
