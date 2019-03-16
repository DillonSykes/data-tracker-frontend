export interface IOwn {
  value: number;
  owe: number;
  type: string;
  payment: number;
  homeOwnerInsurance: boolean;
  whatsIncluded?: string;
  stayInHome: boolean;
}
export class Own implements IOwn {
  value: number;
  owe: number;
  type: string;
  payment: number;
  homeOwnerInsurance: boolean;
  whatsIncluded?: string;
  stayInHome: boolean;
  constructor() {}
}
