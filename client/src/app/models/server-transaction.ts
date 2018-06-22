export interface ServerTransaction {
  transaction_id: String;
  origin?: {
    id: String;
    lat: String;
    lng: String;
    description: String;
  };
  destination?: {
    id: String;
    lat: String;
    lng: String;
    description: String;
  };
  money_amount: String;
  user_id: String;
  courier_id: String;
  new_user: String;
  created_at: String;
}
