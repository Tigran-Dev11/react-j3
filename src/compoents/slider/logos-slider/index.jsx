/* eslint-disable react/prop-types */

import Slider from "react-slick";
import * as S from "./styled";
import { logos } from "/src/pages/client/home/data";

const SliderLogos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <S.SliderContainer>
      <Slider {...settings}>
        {logos?.map((item) => (
          <S.LogosContainer key={item.id}>
            <S.Logo src={item.src} alt={`Logo ${item.id}`} />
          </S.LogosContainer>
        ))}
      </Slider>
    </S.SliderContainer>
  );
};

export default SliderLogos;
