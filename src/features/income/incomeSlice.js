import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    value: 0
}

export const incomeSlice = createSlice ({
    name: 'items',
    initialState,
    reducers: {
        addIncomeItem: (state, actions) => {
            state.items = [...state.items, actions.payload];
            state.value += Number(actions.payload.amount);
        },
        deleteIncomeItem: (state, actions) => {
            state.value -= Number(actions.payload.amount);
            state.items = state.items.filter((item)=> item.id !== actions.payload.id);
        }
    }
})

export const { addIncomeItem, deleteIncomeItem } = incomeSlice.actions
export default incomeSlice.reducer