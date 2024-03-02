import MenuItem, { MenuItemBreakfast, menuBreakfast } from "./menu";
import {MenuBaker} from "./menu";
import "./style.css";

const Menu = () => {
  return (
    <div className="menu-section">
      <div className="menu-title-section">
        <h1 className="menu-title">Our Menu</h1>
        <p className="menu-descraption-info">
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <section className="menu">
        <h4>All Day Every Day</h4>
        <h4>Bakery</h4>
        <div className="bakery">
           <MenuItem items={MenuBaker}/>
        </div>
        <h4>All-Day Breakfast</h4>
        <div className="breakfast">
            <MenuItemBreakfast items={menuBreakfast}/>
        </div>
      </section>
    </div>
  );
};
export default Menu;
