import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    categories: [
        {
            name: "Salud",
            value: 0,
            iconName: "ambulance",
            color: "red"
        },
        {
            name: "Ocio",
            value: 0,     
            iconName: "beer",
            color: "green",
        },
        {
            name: "Nafta",
            value: 0,     
            iconName: "car",
            color:"blue"       
        },
        {
            name: "Viaje",
            value: 0,  
            iconName: "airplane",
            color:"pink"           
        },
        {
            name: "Regalo",
            value: 0,  
            iconName: "gift",
            color:"gold"           
        },
        {
            name: "Comida",
            value: 0,
            iconName: "baguette",
            color: "silver"
        },
        {
            name: "Generales",
            value: 0,
            iconName: "cart",
            color: "brown"
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
                    item.value += Number(actions.payload.amount);
                    }
                })
        },
        subsCategories: (state, actions) => {
            state.categories.find((item) => {                
                if(item.name === actions.payload.category) {
                    item.value -= Number(actions.payload.amount);
                }                
            })  
        }        
    }
})

export const { addNewCategorie, plusCategories, subsCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;