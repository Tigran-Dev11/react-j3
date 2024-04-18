/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styled";
import { usersActions } from "../../libs/redux/user/user-slice";

const UserCard = ({ item }) => {

  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: item.name,
    email: item.email,
    address: item.address,
  });

  const deleteUserCard = () => {
    dispatch(usersActions.removeUser(item.id));
  };

  const toggleEditUserCard = () => {
    setIsEditing((prevState) => !prevState);
    setUserData({
        name: item.name,
        email: item.email,
        address: item.address,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(usersActions.updateUser({ id: item.id, ...userData }));
    setIsEditing(false);
  };

  return (
    <S.UserCard key={item.id}>
      <S.UserName>{item.name}</S.UserName>
      <S.UserDescription>{item.email}</S.UserDescription>
      <S.UserDescription>
        {item.address.street} {item.address.suite} {item.address.city}
      </S.UserDescription>
      <S.SpanContainer>
        <S.Span onClick={deleteUserCard}>Delete</S.Span>
        <S.Span onClick={toggleEditUserCard}>Edit</S.Span>
      </S.SpanContainer>

      {isEditing && (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            placeholder="Email"
          />
          <input
            type="text"
            value={userData.address.street}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  street: e.target.value,
                },
              })
            }
            placeholder="Street"
          />
          <input
            type="text"
            value={userData.address.suite}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  suite: e.target.value,
                },
              })
            }
            placeholder="Suite"
          />
          <input
            type="text"
            value={userData.address.city}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  city: e.target.value,
                },
              })
            }
            placeholder="City"
          />
          <button type="submit">Save</button>
        </form>
      )}
    </S.UserCard>
  );
};

export default UserCard;
