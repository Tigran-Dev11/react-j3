import styled from "styled-components";

export const UserListContainer = styled.div`
  padding-inline: 144px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserListHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.5;
`;

export const UserTableContainer = styled.div`
  width: 100%;
  display: flex;

  .p-datatable {
    width: 100% !important;
  }

  .p-datatable .p-datatable-tbody > tr{
    height: 80px;
  }
`;
