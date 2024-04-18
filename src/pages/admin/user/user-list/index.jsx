import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { usersSelector } from "../../../../libs/redux/user/selector";
import { FETCH_STATUS } from "../../../../utils/constants";
import { getUsers } from "../../../../libs/redux/user/action";
import * as S from "./styled"
import UserCard from "../../../../compoents/user-card";


const User = () => {
  const { users, userStatus } = useSelector(usersSelector);
  console.log(userStatus)
  const dispatch = useDispatch();
  useEffect(() => {
    if (userStatus === FETCH_STATUS.IDL) {
      dispatch(getUsers());
    }
  }, [dispatch, userStatus]);

  if (userStatus === FETCH_STATUS.PENDING) {
    return <div>Loading...</div>;
  } else if (userStatus === FETCH_STATUS.FAILED) {
    return <div>Error fetching albums.</div>;
  }
  
  return (
  <S.UserContainer>{users?.map((item=>{
    return  <UserCard item={item} key={item.id}/>
  }))}</S.UserContainer>
  )
};

export default User;