import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState={value:{userName:"Raju"}}
// slice contains all the reducer logics and actions for a single feature. 
const userSlice= createSlice({
name: "user",
initialState,
reducers:{
    //Actions are simply JavaScript objects that have a type with a payload of data illustrating exactly what is happening. 
    //what they do? they are the only way to manage our state tree. pay attention: no state has been mutated so far.
    CustomerName:(state, action)=>{
        state.value=action.payload;
    },
    ResetName:(state)=>{
        state.value=initialState;
    },
    ReName:(state,action)=>{
        state.value=action.payload;
    }

}

});
//Reducers are just responses to our corresponding called action
// to perform on our immutable state and thus returning a new state. 
export const {CustomerName,ResetName,ReName}=userSlice.actions;
export const store= configureStore({
    reducer:{
        user: userSlice.reducer,
    }

});