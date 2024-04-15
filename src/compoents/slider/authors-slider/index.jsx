/* eslint-disable react/prop-types */
import AuthorCard from "../../author-card";
import * as S from "./styled";
import Slider from "react-slick";
import { authors } from "./../../../pages/client/home/author";
import { useTranslation } from "react-i18next";

const SilderAuthors = () => {
    const {t}= useTranslation()
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
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
