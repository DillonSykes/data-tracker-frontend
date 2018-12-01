import { Component, OnInit } from "@angular/core";
import { NavigateService } from "../../navigate.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { Observable } from "rxjs";
import { Session } from "../../models";
import * as SessionActions from "../../actions";

@Component({
  selector: "app-college-plans",
  templateUrl: "./college-plans.component.html",
  styleUrls: ["./college-plans.component.css"],
})
export class CollegePlansComponent implements OnInit {
  public session: Observable<Session>;
  public rating: number;
  constructor(
    private navigate: NavigateService,
    private store: Store<AppState>,
  ) {
    this.session = store.select("session");
  }

  ngOnInit() {}
  private saveState(submitedRating: number) {
    this.session.subscribe(session => {
      const sessionState = session;
      sessionState.college_plans = submitedRating;
      this.store.dispatch(new SessionActions.AddSession(sessionState));
      // this.navigate.goToCollegePlans();
    });
  }
}
