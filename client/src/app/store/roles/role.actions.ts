import { Action } from "@ngrx/store";

export const SET_ROLE = "SET_ROLE";

export class SetRole implements Action {
  readonly type = SET_ROLE;
  constructor(public payload: any) {}
}

export type All = SetRole;
