import { configureStore } from '@reduxjs/toolkit';
import spendSlice from '../features/spend/spendSlice';
import incomeSlice from '../features/income/incomeSlice';
import categoriesSlice from '../features/categories/categoriesSlice';
import incomeCategoriesSlice from '../features/incomeCategories/incomeCategoriesSlice';

export const store = configureStore({
    reducer: {
        spends: spendSlice,
        income: incomeSlice,
        categories: categoriesSlice,
        incomeCategories: incomeCategoriesSlice,
    },
})