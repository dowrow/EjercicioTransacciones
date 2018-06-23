import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ServerTransaction } from "../models/server-transaction";
import { Transaction } from "../models/transaction";
import { TransactionResponse } from "../models/transactions-response";

const NUMBER_PER_PAGE = 10;
const API_ROOT = "http://localhost:8080/api/";
const TRANSACTIONS_ENDPOINT = API_ROOT + "transactions/";

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

  parseServerTransaction(serverTransaction: ServerTransaction): Transaction {
    let transaction = {
      transactionId: serverTransaction.transaction_id,
      moneyAmount: Number(serverTransaction.money_amount.slice(0, -1)),
      userId: serverTransaction.user_id,
      courierId: serverTransaction.courier_id,
      isNewUser: serverTransaction.new_user != "no",
      createdAt: new Date(+serverTransaction.created_at)
    };
    if (serverTransaction.destination && serverTransaction.destination) {
      transaction["origin"] = {
        id: serverTransaction.origin.id,
        lat: Number(serverTransaction.origin.lat),
        lng: Number(serverTransaction.origin.lng),
        description: serverTransaction.origin.description
      };
      transaction["destination"] = {
        id: serverTransaction.destination.id,
        lat: Number(serverTransaction.destination.lat),
        lng: Number(serverTransaction.destination.lng),
        description: serverTransaction.destination.description
      };
      return transaction;
    } else {
      return transaction;
    }
  }
}
