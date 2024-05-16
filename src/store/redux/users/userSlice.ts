import { create } from "domain";
import { createAppSlice } from "store/createAppSlice";
import { UserData, UserSliceState } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";

const usersInitionalState: UserSliceState = {
   users: []
}

export const UsersSlice = createAppSlice({
    name: "USERS",
    initialState: usersInitionalState,
    reducers: create=>({
        addUser: create.reducer((state: UserSliceState, action: PayloadAction<UserData>)=> {
            state.users = [...state.users, action.payload]
        })
    }),
    selectors:{
        users: (state: UserSliceState)=> state.users
    }
})

export const usersSliceActions = UsersSlice.actions;
export const usersSliceSelectors = UsersSlice.selectors;