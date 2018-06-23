import { Component, OnInit, Input } from "@angular/core";
import { Transaction } from "../../../models/transaction";
import { TransactionService } from "../../../services/transaction.service";
import { MatDialog } from "@angular/material/dialog";
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

  constructor(
    private transactionService: TransactionService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  getDisplayedColumns() {
    let columns = ["transactionId", "userId", "isNewUser", "moneyAmount"];
    if (
      this.transactions.length > 0 &&
      this.transactions[0].origin &&
      this.transactions[0].destination
    ) {
      columns = ["origin", "destination"].concat(columns);
    }
    if (this.showUndocumented) {
      columns.push("requiresDocumentation");
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

  showLocationDetails(location: Location) {
    this.dialog.open(LocationDetailComponent, {
      width: "250px",
      data: location
    });
  }
}
