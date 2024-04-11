import { useTranslation } from "react-i18next";
import * as S from "./styled";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderTitle>{t("privacyPolicy.title")}</S.HeaderTitle>
        <S.HeaderSubtitle>{t("privacyPolicy.subtitle")}</S.HeaderSubtitle>
      </S.HeaderContainer>
      <S.InformationContainer>
        <S.InformationTitle>Lorem ipsum dolor sit amet</S.InformationTitle>
        <S.InformationSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim.
          Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum
          nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </S.InformationSubtitle>
        <S.InformationTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </S.InformationTitle>
        <S.InformationSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim.
          Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum
          nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus
          quam.<br/><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim.
          Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum
          nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </S.InformationSubtitle>
      </S.InformationContainer>
    </>
  );
};

export default PrivacyPolicy;
