import * as S from "./styled";
import { Button } from "primereact/button";

import { DataTable } from "../../../common/data-table/data-table";
import { userColumnData } from "./data";
import { UseFetch } from "../../../hooks/use-fetch";

const UserList = () => {

  const [users, loading, error] = UseFetch({
    url: "/users"
  });

  return (
    <S.UserListContainer>
      <S.UserListHeader>
        <S.Title>USER CRUD</S.Title>
        <Button>Create new user</Button>
      </S.UserListHeader>
      <S.UserTableContainer>
        <DataTable dataKey="id" data={users} columnData={userColumnData} />
      </S.UserTableContainer>
    </S.UserListContainer>
  );
};

export default UserList;
