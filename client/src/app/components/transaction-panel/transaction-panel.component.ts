import { Component, OnInit } from "@angular/core";
import { Transaction } from "../../models/transaction";
import { TransactionService } from "../../services/transaction.service";

@Component({
  selector: "transaction-panel",
  templateUrl: "./transaction-panel.component.html",
  styleUrls: ["./transaction-panel.component.scss"]
})
export class TransactionPanelComponent implements OnInit {
  // TODO move to store
  page = 0;

  // TODO move to store
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
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
}
