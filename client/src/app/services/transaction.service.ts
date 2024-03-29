import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServerTransaction } from "../models/server-transaction";
import { Transaction } from "../models/transaction";
import { TransactionResponse } from "../models/transactions-response";
import { environment } from "../../environments/environment";

const NUMBER_PER_PAGE = 10;
const API_ROOT = environment.apiServer + "/api/";
const TRANSACTIONS_ENDPOINT = API_ROOT + "transactions/";
const SPECIAL_LOCATIONS = ["ESP", "REU", "AND", "ATA"];
const BIG_DISCOUNT_FLOOR = 8000;
const MEDIUM_DISCOUNT_FLOOR = 4000;
const SMALL_DISCOUNT_FLOOR = 1000;
const BIG_DISCOUNT = 0.3;
const MEDIUM_DISCOUNT = 0.2;
const SMALL_DISCOUNT = 0.1;

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

  static getDiscountedMoneyAmount(amount: number): number {
    if (amount > BIG_DISCOUNT_FLOOR) {
      return Math.floor((amount - amount * BIG_DISCOUNT) * 100) / 100;
    } else if (amount > MEDIUM_DISCOUNT_FLOOR) {
      return Math.floor((amount - amount * MEDIUM_DISCOUNT) * 100) / 100;
    } else if (amount > SMALL_DISCOUNT_FLOOR) {
      return Math.floor((amount - amount * SMALL_DISCOUNT) * 100) / 100;
    } else {
      return amount;
    }
  }

  static isUndocumented(transaction: Transaction) {
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
