import { Component, OnInit } from "@angular/core";
import { Own, Rent } from "../../models";

@Component({
  selector: "app-dwelling",
  templateUrl: "./dwelling.component.html",
  styleUrls: ["./dwelling.component.css"],
})
export class DwellingComponent implements OnInit {
  public rentOrOwnSelected: boolean;
  public rentOption: boolean;
  public ownOption: boolean;
  public own: Own;
  public rent: Rent;
  constructor() {
    this.rentOrOwnSelected = false;
    this.rentOption = false;
    this.ownOption = true;
    this.own = new Own();
    this.rent = new Rent();
  }

  ngOnInit() {}

  public flipBool(b: boolean): boolean {
    return !b;
  }
  public setOwnOption(): void {
    this.ownOption = true;
    this.rentOption = false;
  }
  public setRentOption(): void {
    this.ownOption = false;
    this.rentOption = true;
  }
}
