import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { interval, of } from "rxjs";
import { catchError, map, startWith, switchMap } from "rxjs/operators";
import { Role } from "../../models/role";
import { TransactionService } from "../../services/transaction.service";
import * as transactionActions from "./transaction.actions";
import {
  POLLING_FAILED,
  START_POLLING,
  STORE_TRANSACTIONS
} from "./transaction.actions";

const POLLING_TIMEOUT = 2000;
const TRANSACTIONS_PER_PAGE = 10;

@Injectable()
export class TransactionEffects {
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
    map((action: transactionActions.StartPolling) => action.payload),
    switchMap(payload =>
      this.transactionService
        .getTransactions(
          payload.page,
          TRANSACTIONS_PER_PAGE,
          payload.role === Role.MANAGER
        )
        .pipe(
          map(transactionResponse => {
            return {
              type: STORE_TRANSACTIONS,
              payload: transactionResponse
            };
          }),
          catchError(() => of({ type: POLLING_FAILED }))
        )
    )
  );
}
