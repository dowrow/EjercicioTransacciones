export interface Transaction {
  origin?: Location;
  destination?: Location;
  discountedPrice?: Number;
  transaction_id: String;
  money_amount: Number;
  user_id: String;
  courier_id: String;
  new_user: String;
  created_at: Date;
}
