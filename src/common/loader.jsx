import { IMAGES } from "../assets/images";
import css from './loader.module.scss'
export const Loader = () => {
  return (
    <div className={css.loader}>
      <img src={IMAGES.loader} alt="loading" />
    </div>
  );
};