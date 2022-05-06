import { createSlice } from '@reduxjs/toolkit';
export const changerSlice= createSlice({
    name: "changer",
    initialState:{
        value: 'Header',
        address: 'Footer'
    },
    reducers:{
        changeName:(state, action)=>{
            state.value=action.payload.userName;
        },
        changeAddress:(state, action)=>{
            state.address=action.payload.Address;
        }
    }
});
export const {changeName, changeAddress}=changerSlice.actions;

export default changerSlice.reducer;