import { createAppSlice } from "store/createAppSlice";
import { FeedbackStateSlice } from "./types";

const feedbackInitialState: FeedbackStateSlice = {
    countLike: 0,
    countDislike: 0
  }

export const feedbackSlice = createAppSlice({
    name: "FEEDBACK",
    initialState: feedbackInitialState,
    reducers: create => ({
        like: create.reducer((state: FeedbackStateSlice)=>{state.countLike = state.countLike +1}),
        dislike: create.reducer((state: FeedbackStateSlice)=>{state.countDislike = state.countDislike +1}),
        reset: create.reducer((state: FeedbackStateSlice)=>{state.countLike = 0, state.countDislike = 0})
}),
selectors: {
    countLike:(state: FeedbackStateSlice)=>state.countLike,
    countDislike:(state: FeedbackStateSlice)=>state.countDislike,
  }
});

export const feedbackSliceActions = feedbackSlice.actions;
export const feedbackSliceSelectors = feedbackSlice.selectors;
