import { Transaction } from './transaction.model';

export interface TransactionsStateModel {
  transactions: Transaction[];
  error: string;
}
