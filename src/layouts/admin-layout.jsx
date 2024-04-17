import {
  NavLink,
  Outlet,
  useLocation,
  redirect,
  useNavigate
} from "react-router-dom";
import * as S from "./styled";
import { adminRoutesHref } from "../utils/constants";
import { useEffect } from "react";

const AdminLayout = () => {
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

  let location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const params = location.pathname?.split("/");

    if (
      params[params.length - 1] === "admin" ||
      (params[params.length - 2] === "admin" &&
        params[params.length - 1] === "")
    ) {
      navigate("/arm/admin/dashboard");
    }
  }, [location]);
  return (
    <>
      <S.AdminContainer>
        <S.Navbar>
          <NavLink to={`/${lngKey}${adminRoutesHref.dashboard}`}>
            Dashboard
          </NavLink>
        </S.Navbar>
      </S.AdminContainer>
      <S.AdminRighySection>
        <S.AdminHeader>header</S.AdminHeader>
        <div>
          test
          <Outlet />
        </div>
      </S.AdminRighySection>
    </>
  );
};

export default AdminLayout;
