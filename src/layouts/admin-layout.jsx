import { Outlet, useLocation, useNavigate } from "react-router-dom";
import * as S from "./styled";
import { useEffect } from "react";
import Button from "../common/button";
import useLogout from "../hooks/use-logOut";

const AdminLayout = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const logout = useLogout();

  const toCreateUser = () => {
    navigate("/arm/admin/create-user");
  };
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
          <Button title={"Log Out"} variant="primary" onClick={logout} />
        </S.Navbar>
        <S.AdminRighySection>
          <S.AdminHeader>
            User Crud
            <Button title={"Create User"} variant="primary"  onClick={toCreateUser}/>
          </S.AdminHeader>
          <Outlet />
        </S.AdminRighySection>
      </S.AdminContainer>
    </>
  );
};

export default AdminLayout;
