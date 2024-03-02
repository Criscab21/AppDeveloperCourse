import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalIncomeAndSpends: 0,    
}

export const totalChartSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        calcTotal: (state, actions) => {
            state.totalIncomeAndSpends += Number(actions.payload);
        }
    }

})

export const {calcTotal} = totalChartSlice.actions
export default totalChartSlice.reducer