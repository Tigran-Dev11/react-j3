import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";
import { albumSelector } from "../../libs/redux/albums/selector";
import { useEffect } from "react";
import { FETCH_STATUS } from "../../utils/constants";
import { getAlbum } from "../../libs/redux/albums/actions";
import AlbumCard from "../../compoents/album-item";

const Album = () => {
  const { albums, albumsStatus } = useSelector(albumSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (albumsStatus === FETCH_STATUS.IDL) {
      dispatch(getAlbum());
    }
  }, [dispatch, albumsStatus]);


  if (albumsStatus === FETCH_STATUS.PENDING) {
    return <div>Loading...</div>;
  } else if (albumsStatus === FETCH_STATUS.FAILED) {
    return <div>Error fetching albums.</div>;
  }

  return (
    <S.AlbumContainer>
      <S.AlbumTitle>Albums</S.AlbumTitle>
      <S.AlbumHeader>
        {albums?.map(({id, title}) => (
          <AlbumCard key={id} id={id} title={title} />
        ))}
      </S.AlbumHeader>
    </S.AlbumContainer>
  );
};

export default Album;
