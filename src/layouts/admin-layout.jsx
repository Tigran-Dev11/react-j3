import { Outlet } from "react-router-dom";
import * as S from "./styled";

const AdminLayout = () => {
  return (
    <>
      <S.AdminContainer>
        <S.Navbar></S.Navbar>
      </S.AdminContainer>
      <S.AdminRighySection>
        <S.AdminHeader></S.AdminHeader>
        <Outlet/>
      </S.AdminRighySection>    
    </>
  );
};

export default AdminLayout;
