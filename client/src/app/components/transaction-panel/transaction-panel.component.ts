import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Transaction } from "../../models/transaction";
import { Role } from "../../models/role";

@Component({
  selector: "transaction-panel",
  templateUrl: "./transaction-panel.component.html",
  styleUrls: ["./transaction-panel.component.scss"]
})
export class TransactionPanelComponent implements OnInit {
  @Input() role: Role;
  @Input() page = 0;
  @Input() transactions: Transaction[] = [];
  @Input() applyDiscounts: boolean = false;
  @Input() markDuplicates: boolean = false;
  @Input() showUndocumented: boolean = false;
  @Output() pageChange = new EventEmitter();
  @Output() operationSelected = new EventEmitter();

  roles = Role;

  constructor() {}

  ngOnInit() {}

  onPageChange(page) {
    this.pageChange.emit(page);
  }

  onOperationSelected(operation) {
    this.operationSelected.emit(operation);
  }
}
