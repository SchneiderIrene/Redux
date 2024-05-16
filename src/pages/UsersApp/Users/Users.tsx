import { useAppDispatch } from "store/hooks";
import { UsersPageWrapper, UserCard, Paragraph } from "./styles"
import { usersSliceActions, usersSliceSelectors } from "store/redux/users/usersSlice";
import { UsersSliceState } from "store/redux/users/types";
import { v4 } from "uuid";

function Users() {

  const dispach = useAppDispatch();

  const showCard = ()=> {
    dispach(usersSliceActions.addCard())
  }

  const users = {
    
  }
  

  return (
    <UsersPageWrapper>
      <UserCard>
        <Paragraph></Paragraph>
      </UserCard>
    </UsersPageWrapper>
  )
}

export default Users
