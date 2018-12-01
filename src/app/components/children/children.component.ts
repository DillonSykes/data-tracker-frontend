import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Person, Session, smokerPropertyCleaner } from "../../models";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";
import { NavigateService } from "../../navigate.service";
import { DataService } from "../../data.service";
import { ActivatedRoute } from "@angular/router";
import { AppState } from "../../app.state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as SessionActions from "../../actions";

@Component({
  selector: "app-children",
  templateUrl: "./children.component.html",
  styleUrls: ["./children.component.css"],
})
export class ChildrenComponent implements OnInit {
  @ViewChild("childlist")
  childlist: ElementRef;
  public sessionId: string;
  public childNumber: number;
  public children: Person[];
  public currentChild: number;
  public session: Observable<Session>;
  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
    private authService: AuthService,
    private navigate: NavigateService,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) {
    this.currentChild = 0;
    this.childNumber = 1;
    this.children = [];
    this.children.push(new Person());
    this.session = store.select("session");
  }

  ngOnInit() {
    this.sessionId = this.route.snapshot.queryParamMap.get("sessionId");
  }
  addChild() {
    this.children.push(new Person());
  }
  public save() {
    console.log("Saving children...");
    const mappedChildren: Person[] = this.children.map(child => {
      return smokerPropertyCleaner(child);
    });

    this.session.subscribe(session => {
      const sessionState = session;
      sessionState.children = mappedChildren;
      this.store.dispatch(new SessionActions.AddSession(sessionState));
      this.navigate.goToCareTaker();
      console.log("Done", session);
    });
  }
}
