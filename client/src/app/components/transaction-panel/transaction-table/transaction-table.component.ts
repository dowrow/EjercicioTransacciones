import { Component, OnInit, Input } from "@angular/core";
import { Transaction } from "../../../models/transaction";
import { TransactionService } from "../../../services/transaction.service";

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

  constructor(private transactionService: TransactionService) {}

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

  getMoneyAmount(element: Transaction) {
    if (this.applyDiscounts) {
      return this.transactionService.getDiscountedMoneyAmount(
        element.moneyAmount
      );
    } else {
      return element.moneyAmount;
    }
  }

  isUndocumented(element: Transaction) {
    return this.transactionService.isUndocumented(element);
  }
}
