import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Account, LiquidAssets } from "../../models";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { Observable } from "rxjs";
import { Session } from "../../models";
import { NavigateService } from "../../navigate.service";
import * as SessionActions from "../../actions";

@Component({
  selector: "app-liquid-assets",
  templateUrl: "./liquid-assets.component.html",
  styleUrls: ["./liquid-assets.component.css"],
})
export class LiquidAssetsComponent implements OnInit {
  public _account: Account;
  public accounts: Account[];
  public currentAccount: number;
  public session: Observable<Session>;
  public nonRetirementAccounts: string;
  public retirementAccounts: string;
  public liquid_assets: LiquidAssets;
  public otherAccounts: string;
  constructor(
    private store: Store<AppState>,
    private navigate: NavigateService,
  ) {
    this.liquid_assets = new LiquidAssets();
    this.currentAccount = 0;
    this.liquid_assets.accounts.push(new Account());
    this.session = store.select("session");
  }
  // @Input()
  // get account() {
  //   return this._account;
  // }
  //
  // set account(val) {
  //   console.log(val);
  //   this._account = val;
  //   this.accountChange.emit(this._account);
  // }
  //
  // @Output()
  // accountChange = new EventEmitter();
  ngOnInit() {}

  public addAccount() {
    this.accounts.push(new Account());
  }
  public save() {
    this.liquid_assets.retirementAccounts = this.retirementAccounts.split(",");
    this.liquid_assets.otherAccounts = this.otherAccounts.split(",");
    this.liquid_assets.nonRetirementAccounts = this.nonRetirementAccounts.split(
      ",",
    );
    this.session.subscribe(session => {
      const sessionState = session;
      sessionState.liquid_assets = this.liquid_assets;
      this.store.dispatch(new SessionActions.AddSession(sessionState));
      // TODO add navigation
      console.log("Done", session);
    });
  }
}
