import styled from "styled-components";
import { BREAKPOINTS } from '/src/assets/style/breakpoints';

export const UserContainer = styled.div`
width: 100%;
min-height:900px;
display: grid;
grid-template-columns: auto auto auto auto;
padding: 10px;
gap:10px;
border:1px solid;
overflow-x: scroll;

@media screen and (${BREAKPOINTS.mobile}) {
  width: 100%;
  min-height: 600px;
  grid-template-columns: auto auto;
}
`

