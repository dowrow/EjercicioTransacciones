import { Component, OnInit, Input } from "@angular/core";
import { Transaction } from "../../../models/transaction";

@Component({
  selector: "transaction-table",
  templateUrl: "./transaction-table.component.html",
  styleUrls: ["./transaction-table.component.scss"]
})
export class TransactionTableComponent implements OnInit {
  @Input() page: number;
  @Input() transactions: Transaction[];

  displayedColumns = [
    "transactionId",
    "origin",
    "destination",
    "moneyAmount",
    "discountedMoneyAmount",
    "userId",
    "isNewUser"
  ];

  constructor() {}

  ngOnInit() {}
}
