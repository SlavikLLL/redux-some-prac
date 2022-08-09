import {createSlice} from "@reduxjs/toolkit";

export const count = createSlice({
    name:"count",
    initialState:{
        count:0,
    },
    reducers:{
        plus:(state)=>{
            state.count+=1;
        },
        minus:(state)=>{
            state.count-=1;
        },
        zero:(state)=>{
            state.count=0;

        },
        byNumber:(state,action)=>{
            state.count+=action.payload
        }

    }
})

export const {plus,minus,zero, byNumber} = count.actions
export default count.reducer;