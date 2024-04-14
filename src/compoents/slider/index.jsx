// /* eslint-disable react/prop-types */

//
// import 'slick-carousel/slick/slick.css'; // Import the carousel's CSS
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from "react-slick";
// import { logos } from "../../pages/client/home/logo";
// const LogoSlider = () => {
//   let settings = {
//     dots: false,
//     infinite: false,
//     speed: 100,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//   };
//   return (
//     <Slider {...settings}>
//       {logos?.map((elem) => {
//         return (
//           <S.LogosContainer key={elem.id}>
//             <S.Logo src={elem.src} alt="logo" />
//           </S.LogosContainer>
//         );
//       })}
//     </Slider>
//   );
// };
// export default LogoSlider;
import Carousel from "react-bootstrap/Carousel";
import { logos } from "../../pages/client/home/logo";

import * as S from "./styled"

const CarouselFade = () => {
  return (
    <Carousel fade interval={3000} pause="hover">
      {logos?.map((elem) => (
        <Carousel.Item key={elem.id}>
          <S.Logo src={elem.src} alt={`Logo ${elem.id}`}></S.Logo>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselFade;
