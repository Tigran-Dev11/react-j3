import React from "react";
import * as S from "./styled";
import { useTranslation } from "react-i18next";
import  i18n  from './../../i18n';
import { changeLanguage } from 'i18next';

const LanguageSwitecher = () => {
 const {t} = useTranslation()

 const LanguageSelector = () => {
  const history = useHistory();}

  const changeLanguageHandler = (leng) => {
    i18n.changeLanguage(leng);
  };
  return(
   
    <S.Select onChange={(e) => changeLanguageHandler(e.target.value)}>
      <S.Option value={"arm"}>{t('arm')}</S.Option>
      <S.Option value={"en"}>{t("eng")}</S.Option>
    </S.Select>
    
    )
};
export default LanguageSwitecher
  
  


