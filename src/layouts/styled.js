
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AdminContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

export const AdminHeader = styled.header`
  width: 100%;
  height: 100px;
  border: 1px solid;
`;

export const Navbar = styled.nav`
  width: 300px;
  min-height: 100vh;
  border: 1px solid;
`;

export const AdminRighySection = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  border: 1px solid;
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
text-decoration: none;
`