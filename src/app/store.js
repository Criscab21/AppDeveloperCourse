import { configureStore } from '@reduxjs/toolkit';
import spendSlice from '../features/spend/spendSlice';
import incomeSlice from '../features/income/incomeSlice';

export const store = configureStore({
    reducer: {
        spends: spendSlice,
        income: incomeSlice,
    },
})