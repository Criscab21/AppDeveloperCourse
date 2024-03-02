import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    incomeCategories: [
        {
            name: "Sueldo",
            value: 0,            
        },
        {
            name: "Venta",
            value: 0,            
        },
        {
            name: "Regalo",
            value: 0,            
        },
        {
            name: "Prestamo",
            value: 0,            
        },
    ],     
}

export const IncomeCategoriesSlice = createSlice({
    name: "incomeCategories",
    initialState,
    reducers: {
        addNewCategorie: (state, actions) => {
            state.incomeCategories = [...state.categories, actions.payload];
        },
        plusCategories: (state, actions) => {            
            state.incomeCategories.find((item) => {
                if(item.name === actions.payload.category) {
                    console.log(item)
                    item.value += Number(actions.payload.price);
                    }
                })
        },
        subsCategories: (state, actions) => {
            state.incomeCategories.find((item) => {                
                if(item.name === actions.payload.category) {
                    item.value -= Number(actions.payload.price);
                }                
            })  
        }        
    }
})

export const { addNewCategorie, plusCategories, subsCategories } = IncomeCategoriesSlice.actions;
export default IncomeCategoriesSlice.reducer;