 import css from './styled.module.scss'

 const Button = ({ title, primary, secondary }) => {
    const btnClass = primary ? css.btnPrimary : secondary ? css.btnSecondary : css.btn;
  
    return <button className={btnClass}>{title}</button>;
  };

export default Button
