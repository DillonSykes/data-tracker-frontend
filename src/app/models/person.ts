import { CareTakerComponent } from "../components/care-taker/care-taker.component";
import { ChildCaretaker } from "./child-caretaker";

export class Person {
  public first_name: string;
  public last_name: string;
  public date_of_birth: string;
  public smoker: boolean;
  public smoker_amount: string;
  public health_concerns: string;
  constructor() {}
}
export function smokerPropertyCleaner(aPerson) {
  if (!aPerson.smoker) {
    aPerson.smoker_amount = "N/A";
    aPerson.smoker = false;
  }
  return aPerson;
}
