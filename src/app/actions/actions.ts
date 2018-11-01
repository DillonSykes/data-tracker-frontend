import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Session } from "../models";

export const ADD_SESSION = "[SESSION] Add";
export const REMOVE_SESSION = "[SESSION] Remove";

export class AddSession implements Action {
  readonly type = ADD_SESSION;

  constructor(public payload: Session) {}
}

export class RemoveSession implements Action {
  readonly type = REMOVE_SESSION;

  constructor(public payload: number) {}
}

export type Actions = AddSession | RemoveSession;
