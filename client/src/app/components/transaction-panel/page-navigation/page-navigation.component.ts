import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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
    this.pageChange.emit(this.page);
  }

  onPreviousClick(event) {
    this.page--;
    this.pageChange.emit(this.page);
  }
}
