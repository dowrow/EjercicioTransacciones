import { Component } from "@angular/core";
import { Role } from "../models/role";
import { SET_ROLE } from "../store/roles/role.actions";
import { Store } from "@ngrx/store";
import {
  START_POLLING,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  TOGGLE_SHOW_UNDOCUMENTED
} from "../store/transactions/transaction.actions";
import { Transaction } from "../models/transaction";
import {
  TOGGLE_APPLY_DISCOUNTS,
  TOGGLE_MARK_DUPLICATES
} from "../store/transactions/transaction.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private role: Role;
  private transactions: Transaction[];
  private page: number;
  private roleSubscription;
  private transactionSubscription;
  private applyDiscounts;
  private markDuplicates;
  private showUndocumented;

  constructor(private store: Store<any>) {
    this.roleSubscription = this.store.select("role").subscribe(roleModel => {
      this.role = roleModel.role;
    });
    this.transactionSubscription = this.store
      .select("transaction")
      .subscribe(transactionsModel => {
        this.transactions = transactionsModel.transactions;
        this.page = transactionsModel.page;
        this.applyDiscounts = transactionsModel.applyDiscounts;
        this.markDuplicates = transactionsModel.markDuplicates;
        this.showUndocumented = transactionsModel.showUndocumented;
      });
  }

  ngOnInit() {
    this.startPolling();
  }

  onPageChange(action) {
    this.store.dispatch({ type: action });
    this.startPolling();
  }

  onOperationSelected(operation) {
    console.log("op", operation);
    this.store.dispatch({ type: operation });
  }

  setRole(role: Role) {
    this.store.dispatch({ type: SET_ROLE, payload: role });
    this.startPolling();
  }

  startPolling() {
    this.store.dispatch({
      type: START_POLLING,
      payload: {
        page: this.page,
        role: this.role
      }
    });
  }

  ngOnDestroy() {
    this.roleSubscription.unsubscribe();
    this.transactionSubscription.unsubscribe();
  }
}
