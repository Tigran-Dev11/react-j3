
import * as S from "./styled";
export const Button = ({title,onclick,children,...props})=>{
    return( 
        <S.Button onclick={onclick}
        {...props}>
            {children || title}
        </S.Button>
      )
   
    }

