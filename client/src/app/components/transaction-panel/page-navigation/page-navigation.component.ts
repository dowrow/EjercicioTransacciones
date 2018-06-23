import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "page-navigation",
  templateUrl: "./page-navigation.component.html",
  styleUrls: ["./page-navigation.component.scss"]
})
export class PageNavigationComponent implements OnInit {
  @Input() page;

  constructor() {}

  ngOnInit() {}
}
