import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import {
  START_POLLING,
  STORE_TRANSACTIONS,
  POLLING_FAILED
} from "./transaction.actions";
import { TransactionService } from "../../services/transaction.service";
import { interval } from "rxjs";
import {
  map,
  switchMap,
  catchError,
  skipUntil,
  startWith
} from "rxjs/operators";
import { Role } from "../../models/role";
import { Action } from "@ngrx/store";
import * as transactionActions from "./transaction.actions";

const POLLING_TIMEOUT = 5000;
const TRANSACTIONS_PER_PAGE = 10;

@Injectable()
export class StartPollingEffects {
  constructor(
    private transactionService: TransactionService,
    private actions$: Actions
  ) {}

  @Effect()
  startPolling$ = this.actions$.ofType(START_POLLING).pipe(
    switchMap(action => {
      return interval(POLLING_TIMEOUT).pipe(
        startWith(0),
        map(() => action)
      );
    }),
    map((action: transactionActions.StartPolling) => action),
    switchMap(action =>
      this.transactionService.getTransactions(
        action.payload.page,
        TRANSACTIONS_PER_PAGE,
        action.payload.role === Role.MANAGER
      )
    ),

    map(transactionResponse => {
      return { type: STORE_TRANSACTIONS, payload: transactionResponse };
    }),
    catchError(err => of({ type: POLLING_FAILED, payload: err }))
  );
}
