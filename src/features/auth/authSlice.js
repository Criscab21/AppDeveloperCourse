import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        email: null,
        idToken: null,
        localId: null,
        imageCamera: null,
        userName: null,
    },
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, actions) => {            
            state.value = {  
                userName: "User",              
                imageCamera: null,
                email: actions.payload.email,
                idToken: actions.payload.idToken,
                localId: actions.payload.localId
            }            
        },        
        clearUser: (state) => {state.value =  {email:null, idToken:null}},
        setCameraImage: (state, actions) => {            
           state.value = {
                ...state.value,
                imageCamera: actions.payload
           }
        },
        setNameUser: (state, actions) => {
            state.value = {
                ...state.value,
                userName: actions.payload
            }
        }
    },
})


export const { setUser, clearUser, setCameraImage, setNameUser} = authSlice.actions;
export default authSlice.reducer