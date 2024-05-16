export interface UserData {
  id: string
  firstlastName: string
  age: string
  jobTitle: string
}

export interface UserSliceState {
  users: UserData[]
}
