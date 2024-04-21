/* eslint-disable react/prop-types */

import * as S from "./styled";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import useBreakpoints from "/src/hooks/use-breakpoints/index";
import { authors } from "/src/pages/client/home/data";
import AuthorCard from "../../author-card";

const SilderAuthors = () => {
  const { t } = useTranslation();
  const slidesToShow = useBreakpoints();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    autoplay: true,
  };

  return (
    <S.SliderContainer>
      <Slider {...settings}>
        {authors(t)?.map((item) => {
          return <AuthorCard key={item.id} item={item} />;
        })}
      </Slider>
    </S.SliderContainer>
  );
};

export default SilderAuthors;
