import { NavLink, Outlet } from "react-router-dom";
import * as S from "./styled";
import { adminRoutesHref } from "../utils/constants";

const AdminLayout = () => {
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  return (
    <>
      <S.AdminContainer>
        <S.Navbar>
          <NavLink to={`/${lngKey}${adminRoutesHref.dashboard}`}>Dashboard</NavLink>
        </S.Navbar>
      </S.AdminContainer>
      <S.AdminRighySection>
        <S.AdminHeader></S.AdminHeader>
        <Outlet />
      </S.AdminRighySection>
    </>
  );
};

export default AdminLayout;
