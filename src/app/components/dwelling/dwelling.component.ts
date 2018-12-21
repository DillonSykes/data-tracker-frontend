import { Component, OnInit } from "@angular/core";
import {Own, Rent, Session} from "../../models";
import { CityOrSuburbs } from "../../enums";
import { NavigateService } from "../../navigate.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import {Observable} from "rxjs";
import * as SessionActions from "../../actions";
// TODO needs to be seperate components
@Component({
  selector: "app-dwelling",
  templateUrl: "./dwelling.component.html",
  styleUrls: ["./dwelling.component.css"],
})
export class DwellingComponent implements OnInit {
  public rentOption: boolean;
  public ownOption: boolean;
  public own: Own;
  public rent: Rent;
  public homes: Own[];
  public rentedHomes: Rent[];
  public city: CityOrSuburbs;
  public sub: CityOrSuburbs;
  public session: Observable<Session>;
  constructor(
    private store: Store<AppState>,
    private navigate: NavigateService,
  ) {
    this.rentOption = false;
    this.ownOption = false;
    this.own = new Own();
    this.rent = new Rent();
    this.homes = [];
    this.rentedHomes = [];
    this.city = CityOrSuburbs.CITY;
    this.sub = CityOrSuburbs.SUBURBS;
    this.session = store.select("session");
  }

  ngOnInit() {}

  public setOwnOption(): void {
    this.ownOption = true;
    this.rentOption = false;
  }
  public setRentOption(): void {
    this.ownOption = false;
    this.rentOption = true;
  }
  public saveHome(home: Own): void {
    if (home.value === 0) {
      alert("Please enter an aprox value of the home");
      return;
    }
    if (this.homes.length >= 10) {
      alert("You can only add 10 houses");
      return;
    }
    const aHome: Own = { ...home };
    this.homes.push(aHome);
    this.own = new Own();
    console.log(this.homes);
    // TODO add toast
  }
  deleteHome(i: number) {
    // TODO get this working
    this.homes.splice(i, 1);
  }
  // needed to reset whatsIncluded
  public setHomeInsuranceToFalse() {
    this.own.homeOwnerInsurance = false;
    this.own.whatsIncluded = "";
  }
  public save() {
    this.session.subscribe(session => {
      const sessionState = session;
      sessionState.homes = this.homes;
      sessionState.rental = this.rent;
      this.store.dispatch(new SessionActions.AddSession(sessionState));
      // TODO navigation
    });
  }
}
