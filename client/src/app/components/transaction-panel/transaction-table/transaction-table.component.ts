import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Transaction } from "../../../models/transaction";
import { TransactionService } from "../../../services/transaction.service";
import { LocationDetailComponent } from "./location-detail/location-detail.component";

@Component({
  selector: "transaction-table",
  templateUrl: "./transaction-table.component.html",
  styleUrls: ["./transaction-table.component.scss"]
})
export class TransactionTableComponent implements OnInit {
  @Input() transactions: Transaction[] = [];
  @Input() applyDiscounts: Boolean = false;
  @Input() markDuplicates: Boolean = false;
  @Input() showUndocumented: Boolean = false;

  locationDetailsDialog = {};

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  getDisplayedColumns() {
    let columns = [
      "createdAt",
      "transactionId",
      "userId",
      "isNewUser",
      "moneyAmount"
    ];
    if (this.showUndocumented) {
      columns = columns.concat(["requiresDocumentation"]);
    }
    if (
      this.transactions.length > 0 &&
      this.transactions[0].origin &&
      this.transactions[0].destination
    ) {
      columns = ["origin", "destination"].concat(columns);
    }

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
      return TransactionService.getDiscountedMoneyAmount(element.moneyAmount);
    } else {
      return element.moneyAmount;
    }
  }

  isUndocumented(element: Transaction) {
    return TransactionService.isUndocumented(element);
  }

  showLocationDetails(location: Location) {
    this.dialog.open(LocationDetailComponent, {
      width: "250px",
      data: location
    });
  }
}
