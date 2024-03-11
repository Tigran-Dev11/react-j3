import Button from "../../common/button";
import { ROUTES } from "../../utils/constants";
import css from "./styled.module.scss";
import { NavLink } from "react-router-dom";

const Account = () => {
  return (
    <div className={css.accountContainer}>
      <h1>Welcome To 47th Cafe</h1>
      <p>
        You can log in to your account, and if you are not registered on our
        website, you can register
      </p>
      <div className={css.loginRegistr}>
        <NavLink className={css.navLink} to={ROUTES.login}>
          <Button title={"Login"}  variant={'secondary'}></Button>
        </NavLink>
        <NavLink className={css.navLink} to={ROUTES.register}>
          <Button title={"Registration"}  variant={'secondary'}></Button>
        </NavLink>
      </div>
    </div>
  );
};
export default Account;
