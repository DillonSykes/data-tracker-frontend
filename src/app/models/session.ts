import { Person } from "./person";
import { ChildCaretaker } from "./child-caretaker";

export interface Session {
  client_1: Person;
  client_2?: Person;
  children?: Person[];
  granChildren?: Person[];
  child_caretaker?: ChildCaretaker;
}
export class Session implements Session {
  constructor(
    public client_1: Person,
    public client_2?: Person,
    public children?: Person[],
    public grandChildren?: Person[],
    public child_caretaker?: ChildCaretaker,
  ) {}
}
