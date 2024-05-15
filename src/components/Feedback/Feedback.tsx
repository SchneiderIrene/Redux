import { SlLike,  SlDislike } from "react-icons/sl";

import Button from "components/Button/Button";

import {FeedbackContainer, FeedbackResultContainer, LikeDislikeContainer, Result, IconBox, ButtonBox} from './styles'
import { feedbackSliceActions, feedbackSliceSelectors } from "store/redux/feedback/feedbackSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

function Feedback() {
  const countLike = useAppSelector(feedbackSliceSelectors.countLike);
  const countDislike = useAppSelector(feedbackSliceSelectors.countDislike);

  const dispatch = useAppDispatch();
  
  const onLike = ()=>{
    dispatch(feedbackSliceActions.like())
  }

  const onDislike = ()=>{
    dispatch(feedbackSliceActions.dislike())
  }

  const onReset = ()=>{
    dispatch(feedbackSliceActions.reset())
  }


  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <ButtonBox onClick={onLike}>
            <IconBox>
             <SlLike/>
          </IconBox>
          </ButtonBox>
          <Result>{countLike}</Result>
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <ButtonBox onClick={onDislike}>
            <IconBox>
               <SlDislike />
            </IconBox>
          </ButtonBox>
          <Result>{countDislike}</Result>
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="Reset Results" onButtonClick={onReset} />
    </FeedbackContainer>
  );
}

export default Feedback;