import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import * as transactionActions from "./../../../store/transactions/transaction.actions";

@Component({
  selector: "transaction-operations",
  templateUrl: "./transaction-operations.component.html",
  styleUrls: ["./transaction-operations.component.scss"]
})
export class TransactionOperationsComponent implements OnInit {
  @Output() operationSelected = new EventEmitter();

  operations = transactionActions;

  constructor() {}

  ngOnInit() {}
}
