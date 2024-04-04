
import Todos from "../todo"
import * as S from "./styled"
const Home =()=>{

    return(
       <S.TodoContainer>
        <S.TodoHeader>
            <S.Title>todo list</S.Title>
            <Todos/>
        </S.TodoHeader>
       </S.TodoContainer>
    )
}
export default Home