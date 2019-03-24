import {Component, Input, OnInit} from "@angular/core";
import {Rent} from "../../models/dwelling";

@Component({
  selector: "app-rental-view",
  template: `
    <div *ngIf="rentalSelector == 3 && rentals">
      
    </div>
    <div *ngIf="rentalSelector == 3 && !homes">
      No homes
    </div>
  `,
})
export class RentalViewComponent implements OnInit {
  @Input("rental")
  rentals: Rent[];
  @Input("rentalSelector")
  rentalSelector: number;

  constructor() {
  }

  ngOnInit() {
  }
}
