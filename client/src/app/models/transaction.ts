export interface Transaction {
  origin?: {
    id: string;
    lat: number;
    lng: number;
    description: string;
  };
  destination?: {
    id: string;
    lat: number;
    lng: number;
    description: string;
  };
  transactionId: string;
  moneyAmount: number;
  userId: string;
  courierId: string;
  isNewUser: boolean;
  createdAt: Date;
}
