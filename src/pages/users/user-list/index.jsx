import * as S from "./styled";
import { Button } from "primereact/button";

import { useState } from "react";
import { DataTable } from "../../../common/data-table/data-table";

const UserList = () => {
  const data = [
    {
      id: 6805285,
      name: "Gaurang Nair",
      email: "nair_gaurang@stroman.test",
      gender: "male",
      status: "inactive"
    },
    {
      id: 6805284,
      name: "Saroja Bhattathiri",
      email: "bhattathiri_saroja@dicki.test",
      gender: "female",
      status: "inactive"
    },
    {
      id: 6805283,
      name: "Bhaaswar Jain",
      email: "jain_bhaaswar@dicki.test",
      gender: "male",
      status: "inactive"
    },
    {
      id: 6805282,
      name: "Bhavani Chaturvedi",
      email: "bhavani_chaturvedi@bernier.example",
      gender: "female",
      status: "inactive"
    },
    {
      id: 6805281,
      name: "Mr. Kama Achari",
      email: "achari_mr_kama@cassin.example",
      gender: "female",
      status: "inactive"
    },
    {
      id: 6805280,
      name: "Rajendra Bhattacharya",
      email: "rajendra_bhattacharya@schmeler-rosenbaum.example",
      gender: "male",
      status: "active"
    },
    {
      id: 6805279,
      name: "Chandrabhan Gupta",
      email: "gupta_chandrabhan@corkery.example",
      gender: "male",
      status: "active"
    },
    {
      id: 6805278,
      name: "Swarnalata Varma Jr.",
      email: "swarnalata_varma_jr@fahey.example",
      gender: "male",
      status: "active"
    },
    {
      id: 6805277,
      name: "Brahmaanand Shukla",
      email: "brahmaanand_shukla@hoeger-stroman.example",
      gender: "male",
      status: "active"
    },
    {
      id: 6805276,
      name: "Amb. Sarada Sharma",
      email: "sharma_sarada_amb@schimmel-armstrong.example",
      gender: "male",
      status: "inactive"
    }
  ];

  const [users, setUsers] = useState(data);

  // using modal
  const deleteUser = (item) => {
    console.log(item);
  };

  const editUser = (item) => {
    console.log(item);
  };

  // eslint-disable-next-line react/prop-types
  const TableActions = ({ item }) => {
    return (
      <>
        <Button onClick={() => editUser(item)}>Edit</Button>
        <Button onClick={() => deleteUser(item)}>Delete</Button>
      </>
    );
  };

  const columnData = [
    {
      field: "id",
      header: "ID"
    },
    {
      field: "name",
      header: "Name"
    },
    {
      field: "email",
      header: "Email"
    },
    {
      field: "gender",
      header: "Gender"
    },
    {
      field: "status",
      header: "Status"
    },
    {
      header: "Action",
      body: (item) => <TableActions item={item} />
    }
  ];

  return (
    <S.UserListContainer>
      <S.UserListHeader>
        <S.Title>USER CRUD</S.Title>
        <Button>Create new user</Button>
      </S.UserListHeader>
      <S.UserTableContainer>
        <DataTable dataKey="id" data={users} columnData={columnData} />
      </S.UserTableContainer>
    </S.UserListContainer>
  );
};

export default UserList;
