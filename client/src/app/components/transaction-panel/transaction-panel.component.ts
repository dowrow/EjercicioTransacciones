import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Role } from "../../models/role";
import { TransactionsModel } from "../../store/transactions/transactions.model";

@Component({
  selector: "transaction-panel",
  templateUrl: "./transaction-panel.component.html",
  styleUrls: ["./transaction-panel.component.scss"]
})
export class TransactionPanelComponent implements OnInit {
  @Input() role: Role = Role.MANAGER;
  @Input() transactionsModel: TransactionsModel;
  @Output() pageChange = new EventEmitter();
  @Output() operationSelected = new EventEmitter();

  roles = Role;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  onPageChange(page) {
    this.pageChange.emit(page);
  }

  onOperationSelected(operation) {
    this.operationSelected.emit(operation);
  }
}
