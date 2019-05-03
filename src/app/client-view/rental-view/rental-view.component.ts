import { Component, Input, OnInit } from "@angular/core";
import { Rent } from "../../models/dwelling";

@Component({
  selector: "app-rental-view",
  template: `
    <div *ngIf="rentalSelector == 3 && rental">
      <app-title-view text="Rent"></app-title-view>
      <app-info info={{rental.rent}}></app-info>
      <app-title-view text="Plans to buy a house?"></app-title-view>
      <app-info info={{rental.buyHouse}}></app-info>
      <div *ngIf="rental.buyHouse">
        <app-title-view text="City or Suburbs"></app-title-view>
        <app-info info={{rental.cityOrSuburbs}}></app-info>
        <app-title-view text="Type of house they plan to buy"></app-title-view>
        <app-info info={{rental.houseType}}></app-info>
      </div>
      <app-title-view text="Renter Insurance Company"></app-title-view>
      <app-info info={{rental.renterInsuranceCompany}}></app-info>
      <app-title-view text="Same as Auto Insurance?"></app-title-view>
      <app-info info={{rental.sameAsAuto}}></app-info>
    </div>
    <div *ngIf="rentalSelector == 3 && !rental">
      No homes
    </div>
  `,
})
export class RentalViewComponent implements OnInit {
  @Input("rental")
  rental: Rent;
  @Input("rentalSelector")
  rentalSelector: number;

  constructor() {}

  ngOnInit() {}
}
