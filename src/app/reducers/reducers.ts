import { Action } from "@ngrx/store";
import { Session } from "../models";
import * as SessionActions from "../actions/actions";

const initialState: Session = {
  id: "",
  client_1: null
};

// Section 2
export function reducer(
  state: Session[] = [initialState],
  action: SessionActions.Actions,
) {
  // Section 3
  switch (action.type) {
    case SessionActions.ADD_SESSION:
      return [...state, action.payload];
    default:
      return state;
  }
}
