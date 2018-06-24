import { Component } from "@angular/core";
import { Role } from "../models/role";
import { SET_ROLE } from "../store/roles/role.actions";
import { Store } from "@ngrx/store";
import { START_POLLING } from "../store/transactions/transaction.actions";
import { Transaction } from "../models/transaction";
import { TransactionsModel } from "../store/transactions/transactions.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private role: Role;
  private transactionsModel: TransactionsModel;
  private roleSubscription;
  private transactionSubscription;

  constructor(private store: Store<any>) {
    this.roleSubscription = this.store.select("role").subscribe(roleModel => {
      this.role = roleModel.role;
    });
    this.transactionSubscription = this.store
      .select("transaction")
      .subscribe(transactionsModel => {
        this.transactionsModel = transactionsModel;
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
        page: this.transactionsModel.page,
        role: this.role
      }
    });
  }

  ngOnDestroy() {
    this.roleSubscription.unsubscribe();
    this.transactionSubscription.unsubscribe();
  }
}
