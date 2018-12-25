import {CityOrSuburbs} from "../../enums";

export class Rent {
  rent: number;
  buyHouse: boolean;
  cityOrSuburbs: CityOrSuburbs;
  houseType?: string;
  renterInsuranceCompany: string;
  sameAsAuto: boolean;
  constructor() {
    this.buyHouse = false;
    this.cityOrSuburbs = CityOrSuburbs.NOT_SURE;
    this.houseType = "null";
    this.rent = 0;
    this.renterInsuranceCompany = "null";
    this.sameAsAuto = false;
  }
}
