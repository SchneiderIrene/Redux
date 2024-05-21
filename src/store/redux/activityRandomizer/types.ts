export interface ActivityData {
  id: string
  activity: string
  type: string
}

export interface ActivityRandomizerSliceState {
  data: ActivityData[]
  status: "default" | "loading" | "success" | "error"
  error: any
}
