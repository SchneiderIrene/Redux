import { create } from "domain"
import { createAppSlice } from "store/createAppSlice"
import { WeatherSliceState } from "./types"
import { PayloadAction, isRejectedWithValue } from "@reduxjs/toolkit"
import { v4 } from "uuid";
import { error } from "console";

const weatherInitionalState: WeatherSliceState = {
  data: [],
  savedData: [],
  status: "default",
  error: undefined,
}

const API_KEY = "f648a0bad836a08ddbddfc508621ebf2"

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitionalState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (arg: { city: string }, { rejectWithValue }) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${arg.city}&appid=${API_KEY}`,
        )
        const result = await response.json()

        if (!response.ok) {
          return rejectWithValue(result)
        } else {
          return result
        }
      },
      {
        pending : (state: WeatherSliceState)=>{
            state.status = "loading"
            state.error = undefined
        },
        fulfilled: (state: WeatherSliceState, action: any)=>{
            state.status = 'success',
            state.data = [
                ...state.data,
                {
                    id: v4(),
                    city: action.payload?.name,
                    weather: action.payload?.main.temp,
                    icon: action.payload?.weather[0].icon,
                }
            ]
        },
        rejected: (state: WeatherSliceState, action: any)=>{
            state.status = 'error'
            state.error = action.payload
        }
      }
    ),
    deleteWeatherCardHome: create.reducer((state: WeatherSliceState, action: PayloadAction<string>)=>{
      state.data = state.data.filter(weather => weather.id !== action.payload)
    }),
    deleteWeatherCardWeather: create.reducer((state: WeatherSliceState, action: PayloadAction<string>)=>{
      state.savedData = state.savedData.filter(weather => weather.id !== action.payload)
    }),
    deleteAllCards: create.reducer((state: WeatherSliceState)=>{state.savedData = []}),
    saveWeatherCard: create.reducer((state: WeatherSliceState, action: PayloadAction<string>) => {
      const cardToSave = state.data.find(weather => weather.id === action.payload)
      if (cardToSave !== undefined) {
        state.savedData = [...state.savedData, cardToSave]
      }
    }),
    deleteError: create.reducer((state: WeatherSliceState)=>{
      state.error = undefined
      state.status = "default"
    })
  }),
  selectors: {
    weather: state => state.data,
    savedWeather: state => state.savedData,
    status: state => state.status,
    error: state => state.error
  }
})

export const weatherSliceActions = weatherSlice.actions;
export const weatherSliceSelectors = weatherSlice.selectors;
