import { configureStore } from '@reduxjs/toolkit';
import spendSlice from '../features/spend/spendSlice';
import incomeSlice from '../features/income/incomeSlice';
import categoriesSlice from '../features/categories/categoriesSlice';
import incomeCategoriesSlice from '../features/incomeCategories/incomeCategoriesSlice';
import { authApi } from './services/auth';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from '../features/auth/authSlice';
import { profileApi } from './services/profile';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        spends: spendSlice,
        income: incomeSlice,
        categories: categoriesSlice,
        incomeCategories: incomeCategoriesSlice,
        [authApi.reducerPath]: authApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(authApi.middleware, profileApi.middleware),
})

setupListeners(store.dispatch)