import { Component, OnInit, Input } from "@angular/core";
import { Transaction } from "../../models/transaction";
import { TransactionService } from "../../services/transaction.service";
import { TransactionOperation } from "./transaction-operations/transaction-operation";
import { Role } from "../../models/role";

@Component({
  selector: "transaction-panel",
  templateUrl: "./transaction-panel.component.html",
  styleUrls: ["./transaction-panel.component.scss"]
})
export class TransactionPanelComponent implements OnInit {
  roles = Role;

  @Input() role: Role;

  // TODO move to store
  page = 0;

  // TODO move to store
  transactions: Transaction[] = [];

  applyDiscounts = false;
  markDuplicates = false;
  showUndocumented = false;

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    // TODO do inside action with polling
    this.transactionService.getTransactions(this.page, 10).subscribe(
      response => {
        this.transactions = response.transactions.map(
          this.transactionService.parseServerTransaction
        );
      },
      error => console.debug(error)
    );
  }

  onPageChange(page) {
    // TODO: Emit action
    this.page = page;
    this.getTransactions();
  }

  onOperationSelected(operation) {
    switch (operation) {
      case TransactionOperation.APPLY_DISCOUNTS:
        this.applyDiscounts = !this.applyDiscounts;
        break;
      case TransactionOperation.MARK_DUPLICATES:
        this.markDuplicates = !this.markDuplicates;
        break;
      case TransactionOperation.SHOW_UNDOCUMENTED:
        this.showUndocumented = !this.showUndocumented;
        break;
      default:
        break;
    }
  }
}
