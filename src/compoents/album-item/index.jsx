import { useDispatch } from "react-redux";
import * as S from "./styled";
import { IMAGES } from "../../assets/images";
import { albumActions } from "../../libs/redux/albums/album-slice";

const AlbumCard = ({ id, title } ) => {

  const dispatch = useDispatch();

  const deleteAlbum = () => {
    dispatch(albumActions.removeAlbum(id));
    console.log(id);
  };

  return (
    
      <S.AlbumItem>
        <S.AlbumTitle>{title}</S.AlbumTitle>
        <S.Button onClick={deleteAlbum}>
          <S.Img src={IMAGES.removeIcon}></S.Img>
        </S.Button>
      </S.AlbumItem>
    
  );
};

export default AlbumCard;
