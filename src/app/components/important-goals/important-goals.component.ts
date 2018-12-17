import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { NavigateService } from "../../navigate.service";
import { Observable } from "rxjs";
import { Session } from "../../models";
import { Goals } from "../../models";
import * as SessionActions from "../../actions";

@Component({
  selector: "app-important-goals",
  templateUrl: "./important-goals.component.html",
  styleUrls: ["./important-goals.component.css"],
})
export class ImportantGoalsComponent implements OnInit {
  public session: Observable<Session>;
  constructor(
    private store: Store<AppState>,
    private navigate: NavigateService,
    public goals: Goals = new Goals(),
  ) {
    this.session = store.select("session");
  }

  ngOnInit() {}

  public save() {
    this.session.subscribe(session => {
      const sessionState = session;
      sessionState.goals = this.goals;
      this.store.dispatch(new SessionActions.AddSession(sessionState));
      // TODO navigation
      console.log("Done", session);
    });
  }
}
