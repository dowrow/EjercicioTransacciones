import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ServerTransaction } from "../models/server-transaction";
import { Transaction } from "../models/transaction";

const NUMBER_PER_PAGE = 10;
const API_ROOT = "http://localhost:8000/api/";
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
  ): Observable<ServerTransaction[]> {
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
    return this.http.get<ServerTransaction[]>(endpoint);
  }

  parseServerTransaction(serverTransaction: ServerTransaction): Transaction {
    if (serverTransaction.destination && serverTransaction.destination) {
      return {
        transactionId: serverTransaction.transaction_id,
        origin: {
          id: serverTransaction.origin.id,
          lat: Number(serverTransaction.origin.lat),
          lng: Number(serverTransaction.origin.lng),
          description: serverTransaction.origin.description
        },
        destination: {
          id: serverTransaction.destination.id,
          lat: Number(serverTransaction.destination.lat),
          lng: Number(serverTransaction.destination.lng),
          description: serverTransaction.destination.description
        },
        moneyAmount: Number(serverTransaction.money_amount),
        userId: serverTransaction.user_id,
        courierId: serverTransaction.courier_id,
        isNewUser: serverTransaction.new_user != "no",
        createdAt: new Date(+serverTransaction.created_at)
      };
    } else {
      return {
        transactionId: serverTransaction.transaction_id,
        moneyAmount: Number(serverTransaction.money_amount),
        userId: serverTransaction.user_id,
        courierId: serverTransaction.courier_id,
        isNewUser: serverTransaction.new_user != "no",
        createdAt: new Date(+serverTransaction.created_at)
      };
    }
  }
}
