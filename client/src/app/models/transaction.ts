export interface Transaction {
  origin?: {
    id: String;
    lat: Number;
    lng: Number;
    description: String;
  };
  destination?: {
    id: String;
    lat: Number;
    lng: Number;
    description: String;
  };
  transactionId: String;
  moneyAmount: Number;
  userId: String;
  courierId: String;
  isNewUser: Boolean;
  createdAt: Date;
}
