import { Component } from "@angular/core";
import { Role } from "../models/role";
import { SET_ROLE } from "../store/roles/role.actions";
import { Store } from "@ngrx/store";
import { START_POLLING } from "../store/transactions/transaction.actions";
import { Transaction } from "../models/transaction";

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

  constructor(private store: Store<any>) {
    this.roleSubscription = this.store.select("role").subscribe(roleModel => {
      this.role = roleModel.role;
    });
    this.transactionSubscription = this.store
      .select("transaction")
      .subscribe(transactionsModel => {
        this.transactions = transactionsModel.transactions;
        this.page = transactionsModel.page;
      });
  }

  ngOnInit() {
    this.startPolling();
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
