import { asyncData } from "../testing/helpers";
import { TransactionService } from "./transaction.service";
import { Transaction } from "../models/transaction";

describe("TransactionService", () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: TransactionService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new TransactionService(<any>httpClientSpy);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should throw an error", () => {
    try {
      service.getTransactions(-1, 1, false).subscribe();
      fail;
    } catch (e) {
      expect(e).toBeTruthy();
    }
    expect(httpClientSpy.get.calls.count()).toBe(0, "no calls");
  });

  it("should get no transaction", () => {
    const expectedResponse = {
      transactions: []
    };
    httpClientSpy.get.and.returnValue(asyncData(expectedResponse));
    service
      .getTransactions(0, 0, true)
      .subscribe(
        response =>
          expect(response).toEqual(expectedResponse, "expected no transaction"),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });

  it("should get 2 full transactions", () => {
    const expectedResponse = {
      transactions: [
        {
          transaction_id: "y9sfpmzj3fcijba7v6iqf47vi",
          origin: {
            id: "BOL",
            lat: "7.954615228907414",
            lng: "64.66916126103237",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"
          },
          destination: {
            id: "LUX",
            lat: "47.233557621980225",
            lng: "74.25836717440774",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"
          },
          money_amount: "6588€",
          user_id: "ajy62goz3onyabby1azv3g14i",
          courier_id: "lzd6vk0zibxp5aw3tyb9",
          new_user: "no",
          created_at: "2016-01-04T17:08:25.473Z"
        },
        {
          transaction_id: "z9sfpmzj3fcijba7v6iqf47vk",
          origin: {
            id: "BOL",
            lat: "7.954615228907414",
            lng: "64.66916126103237",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"
          },
          destination: {
            id: "LUX",
            lat: "47.233557621980225",
            lng: "74.25836717440774",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"
          },
          money_amount: "4488€",
          user_id: "ajy62goz3onyabby1azv3g14i",
          courier_id: "lzd6vk0zibxp5aw3tyb9",
          new_user: "no",
          created_at: "2016-01-03T17:08:35.473Z"
        }
      ]
    };
    httpClientSpy.get.and.returnValue(asyncData(expectedResponse));
    service
      .getTransactions(0, 2, true)
      .subscribe(
        response =>
          expect(response).toEqual(expectedResponse, "expected transactions"),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });

  it("should parse server transaction without location", () => {
    const serverTransaction = {
      transaction_id: "y9sfpmzj3fcijba7v6iqf47vi",
      money_amount: "6588€",
      user_id: "ajy62goz3onyabby1azv3g14i",
      courier_id: "lzd6vk0zibxp5aw3tyb9",
      new_user: "no",
      created_at: "2016-01-04T17:08:25.473Z"
    };
    const transaction: Transaction = TransactionService.parseServerTransaction(
      serverTransaction
    );
    expect(transaction.transactionId).toBe(serverTransaction.transaction_id);
    expect(transaction.moneyAmount).toBe(6588);
    expect(transaction.userId).toBe(serverTransaction.user_id);
    expect(transaction.courierId).toBe(serverTransaction.courier_id);
    expect(transaction.isNewUser).toBeFalsy();
    expect(+transaction.createdAt).toBe(
      +new Date(serverTransaction.created_at)
    );
    expect(transaction.destination).toBeUndefined();
    expect(transaction.origin).toBeUndefined();
  });

  it("should parse server transaction with location", () => {
    const serverTransaction = {
      transaction_id: "y9sfpmzj3fcijba7v6iqf47vi",
      money_amount: "6588€",
      user_id: "ajy62goz3onyabby1azv3g14i",
      courier_id: "lzd6vk0zibxp5aw3tyb9",
      new_user: "no",
      created_at: "2016-01-04T17:08:25.473Z",
      origin: {
        id: "USA",
        description: "-",
        lat: "0.1",
        lng: "-0.1"
      },
      destination: {
        id: "ESP",
        description: "-",
        lat: "0.1",
        lng: "-0.1"
      }
    };
    const transaction: Transaction = TransactionService.parseServerTransaction(
      serverTransaction
    );
    expect(transaction.transactionId).toBe(serverTransaction.transaction_id);
    expect(transaction.moneyAmount).toBe(6588);
    expect(transaction.userId).toBe(serverTransaction.user_id);
    expect(transaction.courierId).toBe(serverTransaction.courier_id);
    expect(transaction.isNewUser).toBeFalsy();
    expect(+transaction.createdAt).toBe(
      +new Date(serverTransaction.created_at)
    );
    expect(transaction.destination).toBeDefined();
    expect(transaction.destination.lat).toBe(0.1);
    expect(transaction.destination.lng).toBe(-0.1);
    expect(transaction.origin).toBeDefined();
    expect(transaction.destination.lat).toBe(0.1);
    expect(transaction.destination.lng).toBe(-0.1);
  });

  it("should check if needs special documentation", () => {
    const undocumentedTransaction: Transaction = {
      origin: {
        id: "ESP",
        lat: 1,
        lng: 0,
        description: "-"
      },
      destination: {
        id: "USA",
        lat: 1,
        lng: 0,
        description: "-"
      },
      transactionId: "transaction-id",
      moneyAmount: 1000,
      userId: "user-id",
      courierId: "courier-id",
      isNewUser: false,
      createdAt: new Date()
    };
    const documentedTransaction: Transaction = {
      origin: {
        id: "USA",
        lat: 1,
        lng: 0,
        description: "-"
      },
      destination: {
        id: "BCN",
        lat: 1,
        lng: 0,
        description: "-"
      },
      transactionId: "transaction-id",
      moneyAmount: 1000,
      userId: "user-id",
      courierId: "courier-id",
      isNewUser: false,
      createdAt: new Date()
    };
    expect(
      TransactionService.isUndocumented(undocumentedTransaction)
    ).toBeTruthy();
    expect(
      TransactionService.isUndocumented(documentedTransaction)
    ).toBeFalsy();
  });

  it("should calculate discounted money amounts", () => {
    expect(TransactionService.getDiscountedMoneyAmount(500)).toBe(500);
    expect(TransactionService.getDiscountedMoneyAmount(2000)).toBe(
      2000 - 0.1 * 2000
    );
    expect(TransactionService.getDiscountedMoneyAmount(5000)).toBe(
      5000 - 0.2 * 5000
    );
    expect(TransactionService.getDiscountedMoneyAmount(9000)).toBe(
      9000 - 0.3 * 9000
    );
  });
});
