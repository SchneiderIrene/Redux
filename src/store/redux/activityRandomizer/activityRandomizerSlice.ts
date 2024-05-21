import { createAppSlice } from "store/createAppSlice"
import { ActivityRandomizerSliceState } from "./types"
import { create } from "domain"
import { PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid";

const activityRandomizerInitialState: ActivityRandomizerSliceState = {
  data: [],
  status: "default",
  error: undefined,
}

export const activityRandomizerSlice = createAppSlice({
  name: "ACTIVITYRANDOMIZER",
  initialState: activityRandomizerInitialState,
  reducers: create => ({
    getActivity: create.asyncThunk(
      async (arg, {rejectWithValue}) => {

       
          const response = await fetch(" https://www.boredapi.com/api/activity")
          const result = await response.json()
  
          if (!response.ok) {
            return rejectWithValue(result)
          } else {
            return result
          }
      },
      {
        pending: (state: ActivityRandomizerSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: ActivityRandomizerSliceState, action: any) => {
          state.status = "success"
          state.data = [
            ...state.data,
            {
              id: v4(),
              activity: action.payload?.activity,
              type: action.payload?.type,
            },
          ]
        },
        rejected: (state: ActivityRandomizerSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
    deleteAllActivity: create.reducer(() => activityRandomizerInitialState),
    deleteActivity: create.reducer(
      (state: ActivityRandomizerSliceState, action: PayloadAction<string>) => {
        state.data = state.data.filter(actiity => actiity.id !== action.payload)
      },
    ),
  }),
  selectors: {
    activity: state => state,
  },
})

export const activityRandomizerSliceActions = activityRandomizerSlice.actions
export const activityRandomizerSliceSelectors =
  activityRandomizerSlice.selectors
