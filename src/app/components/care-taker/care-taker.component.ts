import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AppState } from "../../app.state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ChildCaretaker, Session } from "../../models";
import * as SessionActions from "../../actions";
import { NavigateService } from "../../navigate.service";

@Component({
  selector: "app-care-taker",
  templateUrl: "./care-taker.component.html",
  styleUrls: ["./care-taker.component.css"],
})
export class CareTakerComponent implements OnInit {
  public _inputText: string;
  private session: Observable<Session>;
  public caretaker: ChildCaretaker;
  constructor(
    private store: Store<AppState>,
    public navigate: NavigateService,
  ) {
    this.session = this.store.select("session");
    this.caretaker = new ChildCaretaker();
  }
  @Input()
  get inputText() {
    return this._inputText;
  }

  set inputText(val) {
    this._inputText = val;
    this.inputTextChange.emit(this._inputText);
  }

  @Output()
  inputTextChange = new EventEmitter();
  ngOnInit() {}
  public save() {
    if (this._inputText) {
      this.caretaker.plans = this._inputText;
    } else {
      this.caretaker.plans = "N/A";
    }
    this.session.subscribe(session => {
      const sessionState: Session = session;
      sessionState.child_caretaker = this.caretaker;
      this.store.dispatch(new SessionActions.AddSession(sessionState));
      this.navigate.goToGrandChildren();
    });
    if (this.inputText === "") {
      console.log(this.inputText);
    }
  }
}
