import { createAppSlice } from "store/createAppSlice"
import { CounterStateSlice } from "./types"
import { create } from "domain"
import { PayloadAction } from "@reduxjs/toolkit";

const counterInitialState: CounterStateSlice = {
  count: 10,
}

export const counterSlice = createAppSlice({
  name: "COUNTER",
  initialState: counterInitialState,
  reducers: create => ({
    add: create.reducer((state: CounterStateSlice)=>{state.count = Number((state.count +1).toFixed(2))}),
    minus: create.reducer((state: CounterStateSlice)=>{state.count = Number((state.count -1).toFixed(2))}),
    divide: create.reducer((state: CounterStateSlice)=>{state.count = Number((state.count /2).toFixed(2))}),
    
    multiply: create.reducer((state: CounterStateSlice, 
        action: PayloadAction<number>)=>{state.count = Number((state.count *action.payload).toFixed(2))}),
  }),
  selectors: {
    count:(state: CounterStateSlice)=>state.count
  }
})

export const counterSliceActions = counterSlice.actions;
export const counterSliceSelectors = counterSlice.selectors;