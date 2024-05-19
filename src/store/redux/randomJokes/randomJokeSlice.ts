import { create } from "domain"
import { createAppSlice } from "store/createAppSlice"
import { RandomJokesSliceState } from "./types"

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  status: "default",
  error: undefined,
}

export const randomJokesSlice = createAppSlice({
  name: "RANDOMJOKES",
  initialState: randomJokesInitialState,
  reducers: create => ({
    getJoke: create.asyncThunk(
      async (arg, thunkApi) => {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke",
        )
        const result = await response.json()
        console.log(result)

        if (!response.ok) {
          thunkApi.rejectWithValue(result)
        } else {
          return result
        }
      },
      {
        pending: (state: RandomJokesSliceState) => {
          console.log("pending")

          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          console.log("fulfill")
          state.status = "success"
          state.data = [
            ...state.data,
            {
              id: action.payload?.id,
              question: action.payload?.setup,
              answer: action.payload?.punchline,
            },
          ]
        },
        rejected: (state: RandomJokesSliceState, action: any) => {
            state.status = 'error'
            state.error = action.payload
        },
      },
    ),
  }),
  selectors: {
    joke: state => state,
  },
})

export const randomJokesSliceActions = randomJokesSlice.actions
export const randomJokesSliceSelectors = randomJokesSlice.selectors
