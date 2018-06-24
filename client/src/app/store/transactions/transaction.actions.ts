import { Action } from "@ngrx/store";

export const START_POLLING = "START_POLLING";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const TOGGLE_APPLY_DISCOUNTS = "TOGGLE_APPLY_DISCOUNTS";
export const TOGGLE_MARK_DUPLICATES = "TOGGLE_MARK_DUPLICATES";
export const TOGGLE_SHOW_UNDOCUMENTED = "TOGGLE_SHOW_UNDOCUMENTED";
export const STORE_TRANSACTIONS = "STORE_TRANSACTIONS";
export const POLLING_FAILED = "POLLING_FAILED";

export class StartPolling implements Action {
  readonly type = START_POLLING;
  constructor(public payload: any) {}
}

export class NextPage implements Action {
  readonly type = NEXT_PAGE;
  constructor(public payload: any) {}
}

export class PreviousPage implements Action {
  readonly type = PREVIOUS_PAGE;
  constructor(public payload: any) {}
}

export class ToggleApplyDiscounts implements Action {
  readonly type = TOGGLE_APPLY_DISCOUNTS;
  constructor(public payload: any) {}
}

export class ToggleMarkDuplicates implements Action {
  readonly type = TOGGLE_MARK_DUPLICATES;
  constructor(public payload: any) {}
}

export class ToggleShowUndocumented implements Action {
  readonly type = TOGGLE_SHOW_UNDOCUMENTED;
  constructor(public payload: any) {}
}

export class StoreTransactions implements Action {
  readonly type = STORE_TRANSACTIONS;
  constructor(public payload: any) {}
}

export class PollingFailed implements Action {
  readonly type = POLLING_FAILED;
  constructor(public payload: any) {}
}

export type All =
  | StartPolling
  | NextPage
  | PreviousPage
  | ToggleApplyDiscounts
  | ToggleMarkDuplicates
  | ToggleShowUndocumented
  | StoreTransactions
  | PollingFailed;
