import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    categories: [
        {
            name: "Salud",
            value: 0,            
        },
        {
            name: "Ocio",
            value: 0,            
        },
        {
            name: "Casa",
            value: 0,            
        },
        {
            name: "Cafe",
            value: 0,            
        },
    ],     
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addNewCategorie: (state, actions) => {
            state.categories = [...state.categories, actions.payload];
        },
        plusCategories: (state, actions) => {            
            state.categories.find((item) => {
                if(item.name === actions.payload.category) {
                    item.value += Number(actions.payload.price);
                    }
                })
        },
        subsCategories: (state, actions) => {
            state.categories.find((item) => {                
                if(item.name === actions.payload.category) {
                    item.value -= Number(actions.payload.price);
                }                
            })  
        }        
    }
})

export const { addNewCategorie, plusCategories, subsCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;