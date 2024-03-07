import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    incomeCategories: [
        {
            name: "Sueldo",
            value: 0,
            iconName: "hail",
            color: "gold"
        },
        {
            name: "Venta",
            value: 0,   
            iconName: "home-analytics",
            color: "red"         
        },
        {
            name: "Regalo",
            value: 0, 
            iconName: "gift",
            color: "green"           
        },
        {
            name: "Prestamo",
            value: 0,  
            iconName: "hand-extended",
            color: "blue"          
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