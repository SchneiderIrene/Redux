import { useAppDispatch, useAppSelector } from "store/hooks";
import { UsersPageWrapper, UserCard, Paragraph } from "./styles"
import { UsersSlice, usersSliceActions, usersSliceSelectors } from "store/redux/users/usersSlice";
import { UserData, UsersSliceState } from "store/redux/users/types";
import { v4 } from "uuid";
import Button from "components/Button/Button";

function Users() {

  const users = useAppSelector(usersSliceSelectors.users);
  const dispatch = useAppDispatch();

  const usersCards = users.map((user: UserData)=>{
    const deleteUser = ()=>{
      dispatch(usersSliceActions.deleteUser(user.id))
    }
    
    return (
      <UserCard key={user.id}>
        <Paragraph>Full name: {user.firstlastName}</Paragraph>
        <Paragraph>Age: {user.age}</Paragraph>
        <Paragraph>Job Title: {user.jobTitle}</Paragraph>
        <Button name="delet user" onButtonClick={deleteUser}/>
      </UserCard>
    )
  })



  const deleteAllUsers = ()=>{
dispatch(usersSliceActions.deleteAllUsers());
  }


  return (
    <UsersPageWrapper>
      {usersCards}
      {users.length>0 && <Button name="Delete all users" onButtonClick={deleteAllUsers}/>}
      </UsersPageWrapper>
  )
}

export default Users
