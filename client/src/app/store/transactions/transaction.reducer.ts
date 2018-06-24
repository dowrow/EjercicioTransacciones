import { TransactionsModel } from "./transactions.model";

const initialState: TransactionsModel = {
  page: 0,
  transactions: [],
  applyDiscounts: false,
  showUndocumented: false,
  markDuplicates: false
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
