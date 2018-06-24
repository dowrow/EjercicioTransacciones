import { defer } from "rxjs/internal/observable/defer";

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
