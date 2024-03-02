import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    items: [], 
    value:0
}

export const spendSlice = createSlice ({
    name: 'items',
    initialState,
    reducers: {
        addSpendItem: (state, actions) => {
            state.items = [...state.items, actions.payload]
            state.value += Number(actions.payload.price);        
        },
        deleteSpendItem: (state, actions) => {            
            state.value -= Number(actions.payload.price);
            state.items = state.items.filter((item)=> item.id !== actions.payload.id);
        },        
    }
})

export const { addSpendItem, deleteSpendItem } = spendSlice.actions
export default spendSlice.reducer