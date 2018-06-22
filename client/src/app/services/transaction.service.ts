import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ServerTransaction } from "../models/server-transaction";

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
}
