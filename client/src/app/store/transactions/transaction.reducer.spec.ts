import { transactionReducer } from "./transaction.reducer";
import {
  TOGGLE_APPLY_DISCOUNTS,
  TOGGLE_MARK_DUPLICATES,
  TOGGLE_SHOW_UNDOCUMENTED,
  STORE_TRANSACTIONS
} from "./transaction.actions";

describe("TransactionReducer", () => {
  describe("undefined action", () => {
    it("should return the default role", () => {
      const initialState = {
        page: 0,
        transactions: [],
        applyDiscounts: false,
        showUndocumented: false,
        markDuplicates: false
      };
      const action = {};
      const state = transactionReducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe("TOGGLE_APPLY_DISCOUNTS action", () => {
    it("should toggle to true", () => {
      const initialState = {
        page: 0,
        transactions: [],
        applyDiscounts: false,
        showUndocumented: false,
        markDuplicates: false
      };
      const action = { type: TOGGLE_APPLY_DISCOUNTS };
      const state = transactionReducer(initialState, action);
      expect(state.applyDiscounts).toBeTruthy();
    });

    it("should toggle to false", () => {
      const initialState = {
        page: 0,
        transactions: [],
        applyDiscounts: true,
        showUndocumented: false,
        markDuplicates: false
      };
      const action = { type: TOGGLE_APPLY_DISCOUNTS };
      const state = transactionReducer(initialState, action);
      expect(state.applyDiscounts).toBeFalsy();
    });
  });

  describe("TOGGLE_MARK_DUPLICATES action", () => {
    it("should toggle to true", () => {
      const initialState = {
        page: 0,
        transactions: [],
        applyDiscounts: false,
        showUndocumented: false,
        markDuplicates: false
      };
      const action = { type: TOGGLE_MARK_DUPLICATES };
      const state = transactionReducer(initialState, action);
      expect(state.markDuplicates).toBeTruthy();
    });

    it("should toggle to false", () => {
      const initialState = {
        page: 0,
        transactions: [],
        applyDiscounts: false,
        showUndocumented: false,
        markDuplicates: true
      };
      const action = { type: TOGGLE_MARK_DUPLICATES };
      const state = transactionReducer(initialState, action);
      expect(state.markDuplicates).toBeFalsy();
    });
  });

  describe("TOGGLE_SHOW_UNDOCUMENTED action", () => {
    it("should toggle to true", () => {
      const initialState = {
        page: 0,
        transactions: [],
        applyDiscounts: false,
        showUndocumented: false,
        markDuplicates: false
      };
      const action = { type: TOGGLE_SHOW_UNDOCUMENTED };
      const state = transactionReducer(initialState, action);
      expect(state.showUndocumented).toBeTruthy();
    });

    it("should toggle to false", () => {
      const initialState = {
        page: 0,
        transactions: [],
        applyDiscounts: false,
        showUndocumented: true,
        markDuplicates: false
      };
      const action = { type: TOGGLE_SHOW_UNDOCUMENTED };
      const state = transactionReducer(initialState, action);
      expect(state.showUndocumented).toBeFalsy();
    });
  });

  describe("STORE_TRANSACTIONS action", () => {
    it("should store transactions response", () => {
      const initialState = {
        page: 0,
        transactions: [],
        applyDiscounts: false,
        showUndocumented: false,
        markDuplicates: false
      };
      const action = {
        type: STORE_TRANSACTIONS,
        payload: {
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
            }
          ]
        }
      };
      const state = transactionReducer(initialState, action);
      expect(state.transactions.length).toBe(
        action.payload.transactions.length
      );
    });
  });
});
