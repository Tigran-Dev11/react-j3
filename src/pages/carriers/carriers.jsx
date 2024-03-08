import { NavLink } from "react-router-dom";
import css from "./carriers.module.scss";
import { ROUTES } from "../../utils/const";

const Carriers = () => {
  return (
    <div>
      <NavLink to={ROUTES.registration} className={css.registration}>
        Registration
      </NavLink>
      <NavLink to={ROUTES.login} className={css.login}>
        Login
      </NavLink>
    </div>
  );
};

export default Carriers;
