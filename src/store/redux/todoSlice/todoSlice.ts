import { createAppSlice } from "store/createAppSlice";
import { todoListSliceState } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";


const todoListInitialState: todoListSliceState = {
  todoList: []
}

export const todoListSlice = createAppSlice({
  name: 'TODO',
  initialState: todoListInitialState,
  reducers: create => ({
    addTask: create.reducer((state: todoListSliceState, actions: PayloadAction<string>)=>{
        state.todoList = [... state.todoList, actions.payload]
    })
      }),
  selectors: {
    todoList: (state: todoListSliceState) => state.todoList
  }
})

export const todoListSliceActions = todoListSlice.actions;
export const todoListSliceSelectors = todoListSlice.selectors;

