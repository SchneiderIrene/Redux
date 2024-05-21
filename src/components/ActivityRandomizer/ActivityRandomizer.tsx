import Button from "components/Button/Button";
import { ActivityRandomizerContainer, ButtonBox, ActivityBox, ActivityBoxContainer,  ActivityText, ButtonActivityBox} from "./styles";
import Spinner from "components/Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { activityRandomizerSliceActions, activityRandomizerSliceSelectors } from "store/redux/activityRandomizer/activityRandomizerSlice";
import { useEffect } from "react";

function ActivityRandomizer(){

    const dispatch = useAppDispatch();
    const {data, status, error} = useAppSelector(activityRandomizerSliceSelectors.activity);

const getActivity  = ()=>{
    dispatch(activityRandomizerSliceActions.getActivity())
}

const activities = data.map((activity)=>{
    const deleteActivity = () => {
        console.log(activity.id);
        
        dispatch(activityRandomizerSliceActions.deleteActivity(activity.id));
    };
       
    return(
        <ActivityBox key={activity.id}>
            <ActivityText >{activity.type}: {activity.activity}</ActivityText>
           <ButtonActivityBox>
            <Button name="Delete Activity" onButtonClick={deleteActivity}/>
           </ButtonActivityBox>
        </ActivityBox>
    )
}
)

const deleteAllActivity = ()=>{
    dispatch(activityRandomizerSliceActions.deleteAllActivity());
}


useEffect(() => {
    if (error) {
      alert('Error response')
    }
  }, [error])


    return (
        <ActivityRandomizerContainer>
          
            <ButtonBox>
                <Button name="Get Activity" onButtonClick={getActivity} disabled={status === 'loading'}/>
            </ButtonBox>
           
            <ActivityBoxContainer>{activities}</ActivityBoxContainer>
            
            {activities.length!==0 && <ButtonBox>
                <Button name="Delete all activity" onButtonClick={deleteAllActivity}/>
            </ButtonBox>}
              
             
             {status==='loading' && <Spinner/>}
        </ActivityRandomizerContainer>
    )
}

export default ActivityRandomizer;