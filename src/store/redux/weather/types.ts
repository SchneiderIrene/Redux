export interface WeatherData {
   id: string,
   city: string,
   weather: number,
   icon: string 
}

export interface WeatherSliceState {
    data: WeatherData[],
    savedData: WeatherData[],
    status: "default" | "loading" | "success" | "error",
    error: any
}