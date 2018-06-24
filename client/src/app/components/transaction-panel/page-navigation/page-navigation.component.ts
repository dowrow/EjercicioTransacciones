import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  NEXT_PAGE,
  PREVIOUS_PAGE
} from "../../../store/transactions/transaction.actions";

@Component({
  selector: "page-navigation",
  templateUrl: "./page-navigation.component.html",
  styleUrls: ["./page-navigation.component.scss"]
})
export class PageNavigationComponent implements OnInit {
  @Input() page;
  @Output() pageChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onNextClick(event) {
    this.page++;
    this.pageChange.emit(NEXT_PAGE);
  }

  onPreviousClick(event) {
    this.page--;
    this.pageChange.emit(PREVIOUS_PAGE);
  }
}
