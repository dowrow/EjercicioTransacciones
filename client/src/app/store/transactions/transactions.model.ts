import { Transaction } from "../../models/transaction";

export interface TransactionsModel {
  page: number;
  transactions: Transaction[];
  applyDiscounts: boolean;
  showUndocumented: boolean;
  markDuplicates: boolean;
}
