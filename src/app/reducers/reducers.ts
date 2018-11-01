import { Person, Session } from "../models";
import * as SessionActions from "../actions/actions";

const initialPerson: Person = new Person();
initialPerson.first_name = "This is a first name";
const initialState: Session = {
  client_1: initialPerson,
};
// Section 2
export function reducer(
  state: Session = initialState,
  action: SessionActions.Actions,
) {
  // Section 3
  switch (action.type) {
    case SessionActions.ADD_SESSION:
      return action.payload;
    default:
      return state;
  }
}
