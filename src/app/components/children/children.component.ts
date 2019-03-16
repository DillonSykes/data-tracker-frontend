import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Person, Session } from "../../models";
import { NavigateService } from "../../navigate.service";
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
  public childNumber: number;
  public children: Person[];
  public currentChild: number;
  public session: Observable<Session>;
  constructor(
    private store: Store<AppState>,
    private navigate: NavigateService,
  ) {
    this.currentChild = 0;
    this.childNumber = 1;
    this.children = [];
    this.children.push(new Person());
    this.session = store.select("session");
  }

  ngOnInit() {}

  addChild() {
    this.children.push(new Person());
  }

  public save() {
    console.log("Saving children...");
    this.session.subscribe(session => {
      const sessionState = session;
      sessionState.children = this.children;
      this.store.dispatch(new SessionActions.AddSession(sessionState));
      this.navigate.goToCareTaker();
      console.log("Done", session);
    });
  }
}
