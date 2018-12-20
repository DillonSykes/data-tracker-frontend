export class Own {
  value: number;
  owe: number;
  type: string;
  payment: number;
  homeOwnerInsurance: boolean;
  whatsIncluded: string;
  stayInHome: boolean;
  constructor() {
    this.value = 0;
    this.owe = 0;
    this.type = "";
    this.payment = 0;
    this.homeOwnerInsurance = false;
    this.whatsIncluded = "";
    this.stayInHome = false;
  }
}
