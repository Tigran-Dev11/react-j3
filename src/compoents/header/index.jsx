import { ROUTES } from "../../utils/constants";
import * as S from "./styled";
const Header = () => {
  return (
    <S.NavBar>
      <S.Link to={ROUTES.home}>Home</S.Link>
      <S.Link to={ROUTES.todo}>Todo List</S.Link>
      <S.Link to={ROUTES.album}>Album</S.Link>
      <S.Link to={ROUTES.user}>User</S.Link>
    </S.NavBar>
  );
};

export default Header;
