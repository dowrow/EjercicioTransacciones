import { asyncData } from "../testing/helpers";
import { TransactionService } from "./transaction.service";

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

  it("should get 2 transactions without location", () => {
    const expectedResponse = {
      transactions: [
        {
          transaction_id: "y9sfpmzj3fcijba7v6iqf47vi",
          money_amount: "6588€",
          user_id: "ajy62goz3onyabby1azv3g14i",
          courier_id: "lzd6vk0zibxp5aw3tyb9",
          new_user: "no",
          created_at: "2016-01-04T17:08:25.473Z"
        },
        {
          transaction_id: "z9sfpmzj3fcijba7v6iqf47vk",
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
      .getTransactions(0, 2, false)
      .subscribe(
        transactions =>
          expect(transactions).toEqual(
            expectedResponse,
            "expected transactions"
          ),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });
});
