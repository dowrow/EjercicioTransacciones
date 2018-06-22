import { Component, OnInit } from "@angular/core";
import { Transaction } from "../../../models/transaction";

const DATA = [
  {
    transactionId: "y9sfpmzj3fcijba7v6iqf47vi",
    origin: {
      id: "BOL",
      lat: 7.954615228907414,
      lng: 64.66916126103237,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"
    },
    destination: {
      id: "LUX",
      lat: 47.233557621980225,
      lng: 74.25836717440774,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"
    },
    moneyAmount: 6588,
    discountedMoneyAmount: 4588,
    userId: "ajy62goz3onyabby1azv3g14i",
    courierId: "lzd6vk0zibxp5aw3tyb9",
    isNewUser: false,
    createdAt: new Date("2016-01-04T17:08:25.473Z")
  },
  {
    transactionId: "z9sfpmzj3fcijba7v6iqf47vk",
    origin: {
      id: "BOL",
      lat: 7.954615228907414,
      lng: 64.66916126103237,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"
    },
    destination: {
      id: "LUX",
      lat: 47.233557621980225,
      lng: 74.25836717440774,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"
    },
    moneyAmount: 4488,
    discountedMoneyAmount: 3588,
    userId: "ajy62goz3onyabby1azv3g14i",
    courierId: "lzd6vk0zibxp5aw3tyb9",
    isNewUser: false,
    createdAt: new Date("2016-01-03T17:08:35.473Z")
  }
];

@Component({
  selector: "transaction-table",
  templateUrl: "./transaction-table.component.html",
  styleUrls: ["./transaction-table.component.scss"]
})
export class TransactionTableComponent implements OnInit {
  // TODO get data from store
  dataSource: Transaction[] = DATA;

  // TODO get data from store
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
