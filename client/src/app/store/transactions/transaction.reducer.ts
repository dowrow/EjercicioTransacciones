import { TransactionsModel } from "./transactions.model";
import {
  TOGGLE_APPLY_DISCOUNTS,
  TOGGLE_MARK_DUPLICATES
} from "./transaction.actions";

const initialState: TransactionsModel = {
  page: 0,
  transactions: [],
  applyDiscounts: false,
  showUndocumented: false,
  markDuplicates: false
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_APPLY_DISCOUNTS:
      return { ...state, applyDiscounts: !state.applyDiscounts };
    case TOGGLE_MARK_DUPLICATES:
      return { ...state, markDuplicates: !state.markDuplicates };

    default:
      return state;
  }
};
