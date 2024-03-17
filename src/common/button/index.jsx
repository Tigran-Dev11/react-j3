 import css from './styled.module.scss'

 const Button = ({ title, variant, onClick }) => {
    const classes ={
      primary:css.primary,
      secondary:css.secondary,
      btn:css.btn

    }
  
    return <button onClick={onClick} className={classes[variant]}>{title}</button>;
  };

export default Button
