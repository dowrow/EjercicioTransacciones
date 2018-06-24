import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { DISABLE_OPERATIONS } from "../transactions/transaction.actions";
import { SET_ROLE } from "./role.actions";

@Injectable()
export class RoleEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  setRole$ = this.actions$.ofType(SET_ROLE).pipe(
    map(() => {
      return { type: DISABLE_OPERATIONS };
    })
  );
}
