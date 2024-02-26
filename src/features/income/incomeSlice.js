import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0
}

export const incomeSlice = createSlice ({
    name: 'items',
    initialState,
    reducers: {
        addIncomeItem: (state, actions) => {
            state.items = [...state.items, actions.payload];
            state.total += Number(actions.payload.price);
        },
        deleteIncomeItem: (state, actions) => {
            state.total -= Number(actions.payload.price);
            state.items = state.items.filter((item)=> item.id !== actions.payload);
        }
    }
})

export const { addIncomeItem, deleteIncomeItem } = incomeSlice.actions
export default incomeSlice.reducer