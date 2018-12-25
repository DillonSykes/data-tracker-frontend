import { Person } from "./person";
import { ChildCaretaker } from "./child-caretaker";
import { LiquidAssets } from "./liquid-assets";
import { Goals } from "./goals";
import { Own, Rent } from "./dwelling";
import { Family } from "./family";

export interface Session {
  client_1: Person;
  client_2?: Person;
  children?: Person[];
  granChildren?: Person[];
  child_caretaker?: ChildCaretaker;
  college_plans?: number;
}
export class Session implements Session {
  constructor(
    public client_1: Person,
    public client_2?: Person,
    public children?: Person[],
    public grandChildren?: Person[],
    public child_caretaker?: ChildCaretaker,
    public college_plans?: number,
    public liquid_assets?: LiquidAssets,
    public goals?: Goals,
    public homes?: Own[],
    public rental?: Rent,
    public client1Family?: Family,
    public client2Family?: Family,
  ) {}
}
