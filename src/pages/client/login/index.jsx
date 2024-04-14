
import Input from "../../../common/input";
import * as S from "./styled";
const Login = () => {
  return (
    <S.LoginContainer>
      <S.LoginForm>
        <Input type={"password"} variant="secondary" ></Input>
        <Input></Input>
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default Login;
