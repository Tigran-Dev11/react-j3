import * as S from "./styled";

export const Button = ({ title, onClick, children, ...props }) => {
  return (
    <S.Button onClick={onClick} {...props}>
      {children || title}
    </S.Button>
  );
};
