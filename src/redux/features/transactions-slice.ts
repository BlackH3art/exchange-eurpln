import { createSlice } from "@reduxjs/toolkit";
import { TransactionInterface } from "../../interfaces/TransactionInterface";

interface TransactionState {
  transactions: TransactionInterface[];
}

interface AddTransaction {
  payload: TransactionInterface;
}
interface DeleteTransaction {
  payload: string;
}

const initialState: TransactionState = {
  transactions: []
}

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: AddTransaction) => {
      state.transactions.push(action.payload)
    }, 
    deleteTransaction: (state, action: DeleteTransaction) => {
      state.transactions =  state.transactions.filter(item => item.id !== action.payload);
    }
  }
});


export const { addTransaction, deleteTransaction } = transactionsSlice.actions;