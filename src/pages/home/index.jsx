import { NavLink } from "react-router-dom";
import "./style.css";
import { ROUTES } from "../../utils/constants";
import ButtonForSection, { Button } from "../../common/button";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <p>Cafe & Restaurant Est. 2035</p>
        <h1>Your Go-to Spot for Delicious Eats & Coffee</h1>
        <div className="home-btn">
          <Button title={"Order Online"} />
          <NavLink className="nav-link" to={ROUTES.menu}>
            <Button title={"Our Menu"} />
          </NavLink>
        </div>
      </header>
      <section className="home-section">
        <div className="section-eat">
          <div className="section-eat-left">
            <h1 className="section-title">Eat.</h1>
            <h2>Breakfast, Lunch and Artisanal Pastries</h2>
            <p className="description">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you",
            </p>
            <NavLink className="nav-link" to={ROUTES.menu}>
              <ButtonForSection title={"See More"} />
            </NavLink>
          </div>
          <div className="section-eat-right"></div>
        </div>
        <div className="section-drink">
          <div className="section-drink-left"></div>
          <div className="section-drink-right">
            <h1 className="section-title">Drink.</h1>
            <h2>The Freshest Cup in Town</h2>
            <p className="description">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you",
            </p>
            <NavLink className="nav-link" to={ROUTES.menu}>
              <ButtonForSection title={"See More"} />
            </NavLink>
          </div>
        </div>
        <div className="section-enjoy">
          <div className="section-enjoy-left">
            <h1 className="section-title">Enjoy.</h1>
            <h2>Make Yourself at Home</h2>
            <p className="description">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you",
            </p>
            <NavLink className="nav-link" to={ROUTES.menu}>
              <ButtonForSection title={"See More"} />
            </NavLink>
          </div>
          <div className="section-enjoy-right"></div>
        </div>
      </section>
      <div className="section-info">
        <h1 className="section-title-info">Drop By for a Bite.</h1>
        <div className="information-section">
          <div className="addres">
            <p className="info-title">Addres</p>
            <p className="info">
              500 Terry Francine St.
              <br /> San Francisco, CA 94158
            </p>
          </div>
          <div className="opening-hours">
            <p className="info-title">Opening Hours</p>
            <p className="info">
              Mon - Fri: 9am - 6pm
              <br />
              ​​Saturday: 10am - 2pm
              <br />
              ​Sunday: Closed
            </p>
          </div>
        </div>
        <div className="backgrounds-line">
          <div className="backgrounds-line-one"></div>
          <div className="backgrounds-line-two"></div>
          <div className="backgrounds-line-three"></div>
          <div className="backgrounds-line-four"></div>
          <div className="backgrounds-line-five"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
