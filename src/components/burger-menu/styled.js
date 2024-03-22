import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../assets/style/color";

export const MenuWrapper = styled.div`

  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 480px) {
    display: flex;
  }
`;

export const BurgerIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const MenuItems = styled.div`
//   width:100%;
//   min-height:100vh;
//   position: fixed;

  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const MenuItem = styled(NavLink)`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
