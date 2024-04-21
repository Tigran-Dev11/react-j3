import { useTranslation } from "react-i18next";
import * as S from "./styled";

const AuthorSingle = () => {
  const { t } = useTranslation();
  const selectedAuthor = JSON.parse(localStorage.getItem("author"));
  return (
    <S.Container>
      {selectedAuthor && (
        <S.AuthorItem>
          <S.ContainerTitle>
            {t("authors.description")}
            {selectedAuthor.name}
          </S.ContainerTitle>
          <S.ItemImg src={selectedAuthor.img}></S.ItemImg>
          <S.ItemDescription>{t("contactUs.description")}</S.ItemDescription>
        </S.AuthorItem>
      )}
    </S.Container>
  );
};

export default AuthorSingle;
