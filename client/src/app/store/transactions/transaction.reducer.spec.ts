import { Transaction } from "../../models/role";
import { transactionReducer } from "./transaction.reducer";
import {
  START_POLLING,
  TOGGLE_APPLY_DISCOUNTS,
  TOGGLE_MARK_DUPLICATES,
  TOGGLE_SHOW_UNDOCUMENTED
} from "./transaction.actions";

describe("RoleReducer", () => {
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
      expect(state).toBe({
        page: 0,
        transactions: [],
        applyDiscounts: true,
        showUndocumented: false,
        markDuplicates: false
      });
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
      expect(state).toBe({
        page: 0,
        transactions: [],
        applyDiscounts: false,
        showUndocumented: false,
        markDuplicates: false
      });
    });
  });
});
