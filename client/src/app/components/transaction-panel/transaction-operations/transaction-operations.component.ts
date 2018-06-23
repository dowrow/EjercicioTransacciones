import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TransactionOperation } from "./transaction-operation";

@Component({
  selector: "transaction-operations",
  templateUrl: "./transaction-operations.component.html",
  styleUrls: ["./transaction-operations.component.scss"]
})
export class TransactionOperationsComponent implements OnInit {
  @Output() operationSelected = new EventEmitter();

  operations = TransactionOperation;

  constructor() {}

  ngOnInit() {}
}
