import "./style.css";

export const Button = ({ title, style, hoverClass }) => {
  return (
    <button style={style}  className={`btnConst ${hoverClass}`}>
      {title}
    </button>
  );
};
export const ButtonLearn = {
  padding: "10px 30px",
  borderStyle: "solid",
  borderWidth: "1px",
  color: "white",
  borderColor: "white",
  borderRadius: "4px",
  backgroundColor: "rgba(105, 185, 255, 0.1)",
  cursor: "pointer",
  textTransform: "uppercase",
  lineHeight: "21px",
};
export const ButtonSign = {
  padding: " 12px 30px",
  borderRadius: "4px",
  backgroundColor: "rgb(105, 185, 255)",
  color: "white",
  fontSize: "16px",
  lineHeight: "21px",
  textAlign: "center",
  textTransform: "uppercase",
  cursor: "pointer",
  border: "none",

  
  
};


export const ButtonAllLearn = {
  padding: "12px 30px",
  borderRadius: "4px",
  backgroundColor: "rgb(146, 160, 173)",
  color: "white",
  fontSize: "16px",
  lineHeight: " 21px",
  textAlign: "center",
  letterSpacing: "2px",
  textTransform: "uppercase",

  
};
