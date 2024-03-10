import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        email: null,
        idToken: null,
        localId: null,
        imageCamera: null
    },
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, actions) => {            
            state.value = {                
                imageCamera: null,
                email: actions.payload.email,
                idToken: actions.payload.idToken,
                localId: actions.payload.localId
            }            
        },        
        clearUser: (state) => (state.value = { email:null, idToken:null, localId:null }),
        setCameraImage: (state, actions) => {            
           state.value = {
                ...state.value,
                imageCamera: actions.payload
           }

        },
    },
})


export const { setUser, clearUser, setCameraImage } = authSlice.actions;
export default authSlice.reducer