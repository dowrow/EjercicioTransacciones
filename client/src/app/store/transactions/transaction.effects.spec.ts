import { TestBed } from "@angular/core/testing";
import { TransactionEffects } from "./transaction.effects";
import { Observable } from "rxjs";
import { provideMockActions } from "@ngrx/effects/testing";
import { StartPolling, StoreTransactions } from "./transaction.actions";
import { Role } from "../../models/role";
import { hot, cold } from "jasmine-marbles";
import { TransactionService } from "../../services/transaction.service";
import { Provider } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

describe("TransactionEffects", () => {
  let effects: TransactionEffects;
  let actions: Observable<any>;
  let httpClientSpy: { get: jasmine.Spy };
  let service: TransactionService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new TransactionService(<any>httpClientSpy);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TransactionEffects, provideMockActions(() => actions)]
    });
    effects = TestBed.get(TransactionEffects);
  });

  it("should start polling", () => {
    const action = new StartPolling({ page: 0, role: Role.MANAGER });
    const completion = new StoreTransactions({ transactions: [] });
    actions = hot("a--", { a: action });
    const expected = cold("-", { b: completion });
    expect(effects.startPolling$).toBeObservable(expected);
  });
});
