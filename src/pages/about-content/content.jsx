import React from "react";
import css from "./content.module.scss";
import Button from "../../common/button";
const Content = () => {
  return (
    <div className={css.contentContainer}>
      <div className={css.contentIdea}>
        <div className={css.contentIdeaTitle}>
          <h3>THE BIG IDEA</h3>
          <h1>Waterless</h1>
          <h6>
            We asked ourselves, why are we paying to ship heavy, plastic bottles
            of (mostly) water around the world, when we are already showering in
            water?
          </h6>
          <p>
            By removing added water from our formulas, we can create cutting
            edge formulas that are ultra clean, plant-based and leave your hair
            and skin happy and healthy.
          </p>
          <p>One of the many reasons to go waterless.</p>
        </div>
      </div>
      <div className={css.highPerformace}>
        <div className={css.highBackgorund}></div>
        <div className={css.highContent}>
          <h3>High Performance</h3>
          <h1>It works, we pinky promise.</h1>
          <h6>
            We know that if your personal care products don't make your hair and
            skin feel amazing, nothing else matters.
          </h6>
          <p>
            We have high expectations of our hair and body care and our formulas
            won't disappoint. From a deep cleansing lather to our signature
            fresh scent, we've captured the sensorial shower experience you
            love.
          </p>
          <Button title={"GO WATERLESS"} variant="secondary" />
        </div>
      </div>
      <div className={css.superClean}>
        <div className={css.aboutClean}>
          <h3>Super Clean</h3>
          <h1>Always clean,as it should be.</h1>
          <h6>
            By removing the water from our formulas, Everist products can be
            formulated to a new standard of clean.
          </h6>
          <p>
            Everist products are plant-based, vegan and cruelty-free as well as
            being free-from sulfates, silicones, dyes and synthetic fragrances.
            No small feat.
          </p>
          <Button title={"Go Clean"} variant="secondary" />
        </div>
      </div>
      <div className={css.ecoOptimist}>
        <div className={css.ecoBackground}></div>
        <div className={css.aboutEco}>
          <h3>Made for Eco-Optimists</h3>
          <h1>It's the future of beauty.</h1>
          <h6>
            Our products are thoughtfully designed, inside and out, as is the
            way we do business.
          </h6>
          <p>
            Everist products are single-use plastic free (our tubes are pure
            100% recycled aluminum) and we take our caps back through our
            CapBack program. We also use biodegradable ingredients for our
            formulas and produce with the smallest carbon footprint possible
            (which is then offset, to be certified carbon neutral).
          </p>
          <Button title={"GO ECO"} variant="secondary" />
        </div>
      </div>

      <div className={css.ourVision}>
        <div className={css.aboutVision}>
          <h3>Our VISION</h3>
          <h1>Eco for Everyone</h1>
          <h6>We all want to live more sustainably. We're here to make it easier.</h6>
          <p>We believe that big change happens when small changes become easy and better (in every way) than the status quo. Eco can be for everyone and we're here to prove it. Imperfect environmentalists welcome.</p>
          <Button title={'MEET EVERIST'} variant='secondary'/>
        </div>
      </div>
    </div>
  );
};

export default Content;
