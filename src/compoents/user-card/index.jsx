
import * as S from "./styled";
export const UserCard = ({ id, name, email, address }) => {


  return (
    <S.UserItem>
      <S.UserName> Name: {name}</S.UserName>
      <S.UserName>Email: {email}</S.UserName>
      <S.UserName>Address: {address.street}{address.suite} {address.city}</S.UserName>
    </S.UserItem>

  );
};


