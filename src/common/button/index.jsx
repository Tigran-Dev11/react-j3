import * as S from "./index";

const Button = ({ title, onClick, children, ...props }) => {
  return (
    <S.Button onClick={onClick} {...props}>
      {title}
    </S.Button>
  );
};
export default Button;
