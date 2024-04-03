import * as S from "./styled";
import { Button } from "primereact/button";

import { DataTable } from "../../../common/data-table/data-table";
import { userColumnData } from "./data";
import { UseFetch } from "../../../hooks/use-fetch";
import { useNavigate } from "react-router";


const UserList = () => {
const navigate = useNavigate()
  const [users, loading, error] = UseFetch({
    url: "/users"
  });
 

  if (error){
    console.log(error);
  }
 if(loading){
      <div>Loading</div>
  }
  return (
    <S.UserListContainer>
      <S.UserListHeader>
        <S.Title>USER CRUD</S.Title>
        <Button onClick={() => navigate(`/arm/create-user`)}>Create new user</Button>
      </S.UserListHeader>
      <S.UserTableContainer>
        <DataTable dataKey="id" data={users} columnData={userColumnData} />
      </S.UserTableContainer>
    </S.UserListContainer>
  );
};

export default UserList;
