import { Transaction } from "../../models/role";
import { transactionReducer } from "./transaction.reducer";
import {
  START_POLLING,
  TOGGLE_APPLY_DISCOUNTS,
  TOGGLE_MARK_DUPLICATES,
  TOGGLE_SHOW_UNDOCUMENTED
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
});
