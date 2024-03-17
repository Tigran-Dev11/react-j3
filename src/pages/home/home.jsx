import React from "react";
import css from "./home.module.scss";
import Button from "./../../common/button/index";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import SliderPost from "../../components/slider/slider";
import SlideCare from "../../components/slider/slideCare";
import Content from "../about-content/content";

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <section className={css.aboutContent}>
        <h1 className={css.contentTitle}>
          Find Your Shower Routine (& Receive a Free Gift!).
        </h1>
        <NavLink to={ROUTES.shop}>
          <Button title={"Shop Now"} variant="secondary" />
        </NavLink>
      </section>
      <div className={css.sliderContainer}>
        <div className={css.slidePost}>
          <SliderPost />
        </div>
        <h1>
          "I wasn’t prepared for how much healthier my hair is. I get
          compliments all of the time now."
        </h1>
      </div>

      <div className={css.informationContainer}>
        <div className={css.infoLiner}>
          <h3>Those plastic bottles in your shower?</h3>
          <h1>We've got something better.</h1>
          <p>
            Most shampoos, conditioners and body washes are more than 70% water.
          </p>
          <p>
            Introducing the first, patent-pending waterless concentrates for
            hair and body. 3x concentrated pastes that are packed with good for
            hair and skin ingredients and activated by the water in your shower.
            We fit a whole bottle into a 100ml, travel-friendly, aluminum tube.
          </p>
          <Button title={"SHOP HAIR + BODY"} variant="secondary" />
        </div>
        <div className={css.backgroundLiner}></div>
      </div>
      <SlideCare />

      <Content/>
    </div>
  );
};

export default Home;
