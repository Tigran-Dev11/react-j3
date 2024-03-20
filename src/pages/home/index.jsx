import { Button } from "../../components/button";
import * as S from "./styled";
import Slider from "react-slick";

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
  return (
    <S.HomeContainer>
      <Button title="Click me" isPrimary />
      <Button>Title 2</Button>
    

    <div>
    <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>

    </S.HomeContainer>
  );
};

export default Home;
