import { Component, OnInit } from "@angular/core";
import { IOwn, IRent, Own, Rent, Session } from "../../models";
import { CityOrSuburbs } from "../../enums";
import { NavigateService } from "../../navigate.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { Observable } from "rxjs";
import * as SessionActions from "../../actions";
import { ToastrService } from "ngx-toastr";
// TODO needs to be seperate components
@Component({
  selector: "app-dwelling",
  templateUrl: "./dwelling.component.html",
  styleUrls: ["./dwelling.component.css"],
})
export class DwellingComponent implements OnInit {
  public rentOption: boolean;
  public ownOption: boolean;
  public own: IOwn;
  public rent: IRent;
  public homes: IOwn[];
  public rentedHomes: IRent[];
  public city: CityOrSuburbs;
  public sub: CityOrSuburbs;
  public session: Observable<Session>;
  constructor(
    private store: Store<AppState>,
    private navigate: NavigateService,
    private toastr: ToastrService,
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
    if (!home.value || home.value === 0) {
      this.toastr.error("Please enter an aprox value of the home");
      return;
    }
    if (this.homes.length >= 10) {
      this.toastr.error("You can only add 10 houses");
      return;
    } else {
      const aHome: Own = { ...home };
      this.homes.push(aHome);
      this.own = new Own();
      console.log(this.homes);
      this.toastr.success("Home Saved!");
    }
  }
  deleteHome(i: number) {
    // TODO get this working
    this.homes.splice(i, 1);
  }
  // needed to reset whatsIncluded
  public setHomeInsuranceToFalse() {
    this.own.homeOwnerInsurance = false;
  }
  public save() {
    this.session.subscribe(session => {
      const sessionState = session;
      if (this.homes.length < 1) {
        sessionState.homes = this.homes;
      }
      if (this.rent.rent !== 0) {
        sessionState.rental = this.rent;
      }
      sessionState.rental = this.rent;
      this.store.dispatch(new SessionActions.AddSession(sessionState));
      this.toastr.success("Dwellings saved");
      this.navigate.goToFamily();
    });
  }
}
