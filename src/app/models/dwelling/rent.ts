import { CityOrSuburbs } from "../../enums";

export interface IRent {
  rent: number;
  buyHouse: boolean;
  cityOrSuburbs: CityOrSuburbs;
  houseType?: string;
  renterInsuranceCompany: string;
  sameAsAuto: boolean;
}

export class Rent {
  rent: number;
  buyHouse: boolean;
  cityOrSuburbs: CityOrSuburbs;
  houseType?: string;
  renterInsuranceCompany: string;
  sameAsAuto: boolean;
  constructor() {}
}
