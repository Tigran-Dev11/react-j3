import MenuItem, { MenuItemBreakfast, menuBreakfast } from "./menu";
import {MenuBaker} from "./menu";
import css from "./styled.module.scss"
const Menu = () => {
  return (
    <div className={css.menuSection}>
      <div className={css.menuTitleSection}>
        <h1 className={css.menuTitle}>Our Menu</h1>
        <p className={css.menuDescraptionInfo}>
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <section className={css.menu}>
        <h4>All Day Every Day</h4>
        <h4>Bakery</h4>
        <div className={css.bakery}>
           <MenuItem items={MenuBaker}/>
        </div>
        <h4>All-Day Breakfast</h4>
        <div className={css.breakfast}>
            <MenuItemBreakfast items={menuBreakfast}/>
        </div>
      </section>
    </div>
  );
};
export default Menu;
