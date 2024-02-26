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
            state.total += Number(actions.payload.price);        
        },
        deleteSpendItem: (state, actions) => {
            state.total -= Number(actions.payload.price);
            state.items = state.items.filter((item)=> item.id !== actions.payload.id);
        },        
    }
})

export const { addSpendItem, deleteSpendItem, calTotal } = spendSlice.actions
export default spendSlice.reducer