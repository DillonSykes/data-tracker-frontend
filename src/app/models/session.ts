import {Person} from './person';
import {ChildCaretaker} from './child-caretaker';

export interface Session {
  id: string;
  client_1: Person;
  client_2?: Person;
  children?: Person[];
  granChildren?: Person[];
  child_caretaker?: ChildCaretaker;
}
