import { TransactionsModel } from "./transactions.model";
import {
  TOGGLE_APPLY_DISCOUNTS,
  TOGGLE_MARK_DUPLICATES,
  TOGGLE_SHOW_UNDOCUMENTED,
  STORE_TRANSACTIONS,
  NEXT_PAGE,
  PREVIOUS_PAGE
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
    case TOGGLE_SHOW_UNDOCUMENTED:
      return { ...state, showUndocumented: !state.showUndocumented };
    case STORE_TRANSACTIONS:
      return { ...state, transactions: action.payload.transactions };
    case NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case PREVIOUS_PAGE:
      return { ...state, page: state.page > 1 ? state.page - 1 : 0 };
    default:
      return state;
  }
};
