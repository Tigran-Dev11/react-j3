/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import * as S from "./styled";
import { usersActions } from "../../libs/redux/user/user-slice";
import { useNavigate } from "react-router-dom";

const UserCard = ({ item }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const deleteUserCard = () => {
    dispatch(usersActions.removeUser(item.id));
  };

  // const toggleEditUserCard = () => {
  //   setIsEditing((prevState) => !prevState);
  //   setUserData({
  //     name: item.name,
  //     email: item.email,
  //   });
  // };

  const handleEditSubmit = () => {
    console.log("Navigating to edit user page");
    navigate(`/admin/user/edit-user/${item.id}`)
  };

  return (
    <S.UserCard key={item.id}>
      <S.UserName>{item.name}</S.UserName>
      <S.UserDescription>{item.email}</S.UserDescription>
      <S.UserDescription></S.UserDescription>
      <S.SpanContainer>
        <S.Span onClick={deleteUserCard}>Delete</S.Span>
        <S.Span onClick={handleEditSubmit}>Edit</S.Span>
      </S.SpanContainer>
    </S.UserCard>
  );
};

export default UserCard;
