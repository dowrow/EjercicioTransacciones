import { Actions } from "@ngrx/effects";
import { empty, Observable } from "rxjs";
import { defer } from "rxjs/internal/observable/defer";

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }
  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getTestActions() {
  return new TestActions();
}
