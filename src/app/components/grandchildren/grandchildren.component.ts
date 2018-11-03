import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Person } from "../../models/person";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";
import { NavigateService } from "../../navigate.service";
import { DataService } from "../../data.service";
import { ActivatedRoute } from "@angular/router";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Session } from "../../models";
import { AppState } from "../../app.state";
import { Store } from "@ngrx/store";
import * as SessionActions from "../../actions";

@Component({
  selector: "app-grandchildren",
  templateUrl: "./grandchildren.component.html",
  styleUrls: ["./grandchildren.component.css"],
})
export class GrandchildrenComponent implements OnInit {
  @ViewChild("GrandChildList")
  grandChildList: ElementRef;
  public sessionId: string;
  public grandChildNumber: number;
  public grandChildren: Person[];
  public currentGrandChild: number;
  public session: Observable<Session>;
  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
    private authService: AuthService,
    private navigate: NavigateService,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) {
    this.currentGrandChild = 0;
    this.grandChildNumber = 1;
    this.grandChildren = [];
    this.grandChildren.push(new Person());
    this.session = store.select("session");
  }

  ngOnInit() {
    this.sessionId = this.route.snapshot.queryParamMap.get("sessionId");
    console.log("Session ID: ", this.sessionId);
    console.log(this.grandChildNumber);
    this.session.subscribe(res => {
      console.log("JX: ", res);
    });
  }
  addGrandChild() {
    this.grandChildren.push(new Person());
  }
  public save() {
    this.grandChildren.map(child => {
      if (!child.smoker) {
        child.smoker_amount = "N/A";
        child.smoker = false;
      }
    });
    this.session.subscribe(session => {
      const sessionState = session;
      sessionState.grandChildren = this.grandChildren;
      this.store.dispatch(new SessionActions.AddSession(sessionState));
    });
    // this.http
    //   .post(environment.API_ENDPOINT + "/grandchildren/new", {
    //     token: this.authService.getToken(),
    //     grandChildren: this.grandChildren,
    //     sessionId: this.sessionId,
    //   })
    //   .subscribe(res => {
    //     const data: any = res;
    //     console.log(data);
    //     if (data.status === true) {
    //       // TODO create toast
    //       this.navigate.goToCareTaker(this.sessionId);
    //     }
    //   });
  }
}
