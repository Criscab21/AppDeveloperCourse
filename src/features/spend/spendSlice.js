import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    items: [], 
    total:0
}

export const spendSlice = createSlice ({
    name: 'items',
    initialState,
    reducers: {
        addSpendItem: (state, actions) => {
            state.items = [...state.items, actions.payload]            
        },
        deleteSpendItem: (state, actions) => {
            state.items = state.items.filter((item)=> item.id !== actions.payload);
        }
    }
})

export const { addSpendItem, deleteSpendItem } = spendSlice.actions
export default spendSlice.reducer