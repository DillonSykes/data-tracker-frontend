import { Parent } from "./parent";

export class Family {
  mom: Parent;
  dad: Parent;
  financialBurden: boolean;
  executorOfState: boolean;
  longTermCare: boolean;
  strategyForLongTermCare: string;
  plansForParentsEstate: string;
  careTakerOfParents: string;
  constructor() {
    this.mom = new Parent();
    this.dad = new Parent();
  }
}
