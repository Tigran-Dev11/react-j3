import css from './styled.module.scss'
import Button  from "./../../common/button/index";
import Input from "../../common/input/input";
const Footer = () => {
  return (
    <footer>
      <div className={css.sectionNewsletter}>
        <h1 className={css.titleFooter}>Newsletter</h1>
        <p>Stay up to date with all the latest from 47th Cafe</p>
        <form className={css.form}>
          <Input placeholder={"Email"} type={'email'} variant={'primary'}/>
          <Button title={"Join"} variant={'primary'}/>
        </form>
      </div>
      <div className={css.sectionTalktous}>
        <h1 className={css.titleFooter}>Talk to Us</h1>
        <p>
          123-456-7890 <br /> info@mysite.com
        </p>
        <p>
          500 Terry Francine St. <br />
          San Francisco, CA 94158
        </p>
      </div>
      <div className={css.sectionSocial}>
        <p className={css.sociMedia}>Instagram</p>
        <p className={css.sociMedia}>Facebook</p>
        <p className={css.sociMedia}>Twitter</p>
      </div>
    </footer>
  );
};
export default Footer;
