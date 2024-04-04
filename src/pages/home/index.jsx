import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled.js";
import { useTranslation } from "react-i18next";
import { counterActions } from "../../libs/redux/counter/counter-slice.js";
import { counterSelector } from "../../libs/redux/counter/selector.js";

const Home = () => {
  const { t, i18n } = useTranslation();
  const { counter } = useSelector(counterSelector);

  const dispatch = useDispatch();

  const changeLanguage = (leng) => {
    i18n.changeLanguage(leng);
  };

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const changeCounterValue = ()=>{
    dispatch(counterActions.changeCounterValue(20))
  }


  return (
    <S.HomeContainer>
      <p>{t("title")}</p>

      <button onClick={() => changeLanguage("arm")}>arm</button>
      <button onClick={() => changeLanguage("en")}>eng</button>

      <br />
      {counter}
      <br />
      <button onClick={increment}>increment</button>
      <br />
      <br />
      <button onClick={decrement}>decrement</button>
      <button onClick={changeCounterValue}>changeCounterValue</button>
    </S.HomeContainer>
  );
};

export default Home;
