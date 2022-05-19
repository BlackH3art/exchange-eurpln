import { createSlice } from "@reduxjs/toolkit";
import { TransactionInterface } from "../../interfaces/TransactionInterface";

interface TransactionState {
  transactions: TransactionInterface[];
}

interface AddTransaction {
  payload: TransactionInterface;
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
  }
});


export const { addTransaction } = transactionsSlice.actions;