import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../libs/redux/user/selector";
import { useEffect } from "react";
import { FETCH_STATUS } from "../../utils/constants";
import { getUsers } from "../../libs/redux/user/actions";
import * as S from "./styled";
import { UserCard } from "../../compoents/user-card";

const User = () => {
  const { users, usersStatus } = useSelector(usersSelector);
  console.log(usersStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (usersStatus === FETCH_STATUS.IDL) {
      dispatch(getUsers());
    }
  }, [dispatch, usersStatus]);

  if (usersStatus === FETCH_STATUS.PENDING) {
    return <div>Loading...</div>;
  } else if (usersStatus === FETCH_STATUS.FAILED) {
    return <div>Error fetching albums.</div>;
  }

  return (
    <S.UserHeader>
      <S.UsersTitle>user information</S.UsersTitle>
      <S.UserContainer>
        {users?.map(({ id, name, email, address }) => (
          <UserCard
            key={id}
            id={id}
            name={name}
            email={email}
            address={address}
          />
        ))}
      </S.UserContainer>
    </S.UserHeader>
  );
};

export default User;
