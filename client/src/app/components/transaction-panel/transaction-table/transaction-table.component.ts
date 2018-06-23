import { Component, OnInit, Input } from "@angular/core";
import { Transaction } from "../../../models/transaction";

@Component({
  selector: "transaction-table",
  templateUrl: "./transaction-table.component.html",
  styleUrls: ["./transaction-table.component.scss"]
})
export class TransactionTableComponent implements OnInit {
  @Input() transactions: Transaction[];
  @Input() applyDiscounts: Boolean;
  @Input() markDuplicates: Boolean;
  @Input() showUndocumented: Boolean;

  constructor() {}

  ngOnInit() {}

  getDisplayedColumns() {
    let columns = [
      "transactionId",
      "origin",
      "destination",
      "moneyAmount",
      "userId",
      "isNewUser",
      "requiresDocumentation"
    ];
    return columns;
  }

  isDuplicated(element: Transaction) {
    const coincidentRows = this.transactions.filter(
      transaction => transaction.transactionId === element.transactionId
    );
    return coincidentRows.length > 1;
  }
}
