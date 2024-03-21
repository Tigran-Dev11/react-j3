import * as S from "./styled";
import { ROUTES } from "../../utils/constants";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <S.Nav>
      <NavLink href={ROUTES.home}>Home</NavLink>
      <NavLink href={ROUTES.aboutUs}></NavLink>
    </S.Nav>
  );
};
