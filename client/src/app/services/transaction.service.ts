import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ServerTransaction } from "../models/server-transaction";
import { Transaction } from "../models/transaction";
import { TransactionResponse } from "../models/transactions-response";

const NUMBER_PER_PAGE = 10;
const API_ROOT = "http://localhost:8080/api/";
const TRANSACTIONS_ENDPOINT = API_ROOT + "transactions/";
const SPECIAL_LOCATIONS = ["ESP", "REU", "AND", "ATA"];

@Injectable({
  providedIn: "root"
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  getTransactions(
    page = 0,
    numberPerPage = NUMBER_PER_PAGE,
    includeLocation = true
  ): Observable<TransactionResponse> {
    if (page < 0) {
      Observable.throw("Page should be a positive integer");
    }
    const endpoint =
      TRANSACTIONS_ENDPOINT +
      "?all=" +
      encodeURIComponent(String(includeLocation)) +
      "&page=" +
      encodeURIComponent(String(page)) +
      "&numberPerPage=" +
      encodeURIComponent(String(numberPerPage));
    return this.http.get<TransactionResponse>(endpoint);
  }

  static parseServerTransaction(
    serverTransaction: ServerTransaction
  ): Transaction {
    let transaction = {
      transactionId: serverTransaction.transaction_id.valueOf(),
      moneyAmount: Number(
        serverTransaction.money_amount.slice(0, -1)
      ).valueOf(),
      userId: serverTransaction.user_id.valueOf(),
      courierId: serverTransaction.courier_id.valueOf(),
      isNewUser: serverTransaction.new_user != "no",
      createdAt: new Date(serverTransaction.created_at.valueOf())
    };
    if (serverTransaction.destination && serverTransaction.destination) {
      transaction["origin"] = {
        id: serverTransaction.origin.id.valueOf(),
        lat: Number(serverTransaction.origin.lat).valueOf(),
        lng: Number(serverTransaction.origin.lng).valueOf(),
        description: serverTransaction.origin.description.valueOf()
      };
      transaction["destination"] = {
        id: serverTransaction.destination.id.valueOf(),
        lat: Number(serverTransaction.destination.lat).valueOf(),
        lng: Number(serverTransaction.destination.lng).valueOf(),
        description: serverTransaction.destination.description.valueOf()
      };
      return transaction;
    } else {
      return transaction;
    }
  }

  getDiscountedMoneyAmount(amount: number): number {
    // TODO remove magic numbers
    if (amount > 8000) {
      return Math.floor((amount - amount * 0.3) * 100) / 100;
    } else if (amount > 4000) {
      return Math.floor((amount - amount * 0.2) * 100) / 100;
    } else if (amount > 1000) {
      return Math.floor((amount - amount * 0.1) * 100) / 100;
    } else {
      return amount;
    }
  }

  isUndocumented(transaction: Transaction) {
    if (transaction.origin && transaction.destination) {
      return (
        SPECIAL_LOCATIONS.indexOf(transaction.origin.id) > -1 ||
        SPECIAL_LOCATIONS.indexOf(transaction.destination.id) > -1
      );
    } else {
      return false;
    }
  }
}
