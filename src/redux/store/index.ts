import { configureStore } from '@reduxjs/toolkit';
import { transactionsSlice } from '../features/transactions-slice';

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch