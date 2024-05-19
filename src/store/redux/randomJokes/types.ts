export interface JokeInfo {
  id: string
  question: string
  answer: string
}

export interface RandomJokesSliceState {
  data: JokeInfo[],
  status: 'default' | 'loading' | 'success' | 'error'
  error: any
}
