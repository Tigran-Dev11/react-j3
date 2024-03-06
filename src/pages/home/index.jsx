import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import  Button  from "../../common/button";
import css from "./styled.module.scss";
const Home = () => {
  return (
    <div className={css.homeContainer}>
      <header>
        <p>Cafe & Restaurant Est. 2035</p>
        <h1>Your Go-to Spot for Delicious Eats & Coffee</h1>
        <div className={css.homeBtn}>
          <Button title={"Order Online"} primary />
          <NavLink className={css.navLink} to={ROUTES.menu}>
            <Button title={"Our Menu"} primary />
          </NavLink>
        </div>
      </header>
      <section className={css.homeSection}>
        <div className={css.sectionEat}>
          <div className={css.sectionEatLeft}>
            <h1 className={css.sectionTitle}>Eat.</h1>
            <h2>Breakfast, Lunch and Artisanal Pastries</h2>
            <p className={css.description}>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you",
            </p>
            <NavLink className={css.navLink} to={ROUTES.menu}>
              <Button title={"See More"} secondary/>
            </NavLink>
          </div>
          <div className={css.sectionEatRight}></div>
        </div>
        <div className={css.sectionDrink}>
          <div className={css.sectionDrinkLeft}></div>
          <div className={css.sectionDrinkRight}>
            <h1 className={css.sectionTitle}>Drink.</h1>
            <h2>The Freshest Cup in Town</h2>
            <p className={css.description}>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you",
            </p>
            <NavLink className={css.navLink} to={ROUTES.menu}>
              <Button title={"See More"} secondary />
            </NavLink>
          </div>
        </div>
        <div className={css.sectionEnjoy}>
          <div className={css.sectionEnjoyleft}>
            <h1 className={css.sectionTitle}>Enjoy.</h1>
            <h2>Make Yourself at Home</h2>
            <p className={css.description}>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you",
            </p>
            <NavLink className={css.navLink} to={ROUTES.menu}>
              <Button title={"See More"} secondary/>
            </NavLink>
          </div>
          <div className={css.sectionEnjoyRight}></div>
        </div>
      </section>
      <div className={css.sectionInfo}>
        <h1 className={css.sectionTitleInfo}>Drop By for a Bite.</h1>
        <div className={css.informationSection}>
          <div className={css.addres}>
            <p className={css.infoTitle}>Addres</p>
            <p className={css.info}>
              500 Terry Francine St.
              <br /> San Francisco, CA 94158
            </p>
          </div>
          <div className={css.openingHours}>
            <p className={css.infoTitle}>Opening Hours</p>
            <p className={css.info}>
              Mon - Fri: 9am - 6pm
              <br />
              ​​Saturday: 10am - 2pm
              <br />
              ​Sunday: Closed
            </p>
          </div>
        </div>
        <div className={css.backgroundsLine}>
          <div className={css.backgroundsLineOne}></div>
          <div className={css.backgroundsLineTwo}></div>
          <div className={css.backgroundsLineThree}></div>
          <div className={css.backgroundsLineFour}></div>
          <div className={css.backgroundsLineFive}></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
