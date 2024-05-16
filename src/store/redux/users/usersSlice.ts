import { create } from "domain";
import { createAppSlice } from "store/createAppSlice";
import { UserData, UsersSliceState} from "./types";
import { PayloadAction } from "@reduxjs/toolkit";

const usersInitionalState: UsersSliceState = {
   users: []
}

export const UsersSlice = createAppSlice({
    name: "USERS",
    initialState: usersInitionalState,
    reducers: create=>({
        addUser: create.reducer((state: UsersSliceState, action: PayloadAction<UserData>)=> {
            state.users = [...state.users, action.payload]
        }),
        addCard: create.reducer((state: UsersSliceState)=>{
            state.users = state.users
        })
        }), 
        selectors:{
        users: (state: UsersSliceState)=> state.users,
        cards: (state: UsersSliceState)=> state.users
    }
    })
    


export const usersSliceActions = UsersSlice.actions;
export const usersSliceSelectors = UsersSlice.selectors;