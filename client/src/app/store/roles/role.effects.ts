import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { SET_ROLE, SetRole } from "./role.actions";
import { DISABLE_OPERATIONS } from "../transactions/transaction.actions";
import { map } from "rxjs/operators";

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
