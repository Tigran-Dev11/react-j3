 import css from './styled.module.scss'

 const Button = ({ title, variant, onClick }) => {
    const classes ={
      primary:css.primary,
      secondary:css.secondary,

    }
  
    return <button onClick={onClick} className={classes[variant]}>{title}</button>;
  };

export default Button
