import "./style.css";

export const Button = ({ title, style }) => {
  return (
    <button style={style} className="btnConst">
      {title}
    </button>
  );
};
export const ButtonStyleOne = {
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
export const ButtonStyleTwo = {
  padding: " 12px 30px",
  borderRadius: "4px",
  backgroundColor: "rgb(105, 185, 255)",
  color: "white",
  fontSize: "16px",
  lineHeight: "21px",
  textAlign: "center",
  textTransform: "uppercase",
  border: "none",

  
  
};

 export const buttonHoverStyle ={
    backgroundColor: 'rgb(105, 185, 255)',
        // borderColor:'#69b9ff',
        // color: '#69b9ff',

       
}
export const ButtonStyleThree = {
  padding: "12px 30px",
  borderRadius: "4px",
  backgroundColor: "rgb(146, 160, 173)",
  color: "white",
  fontSize: "16px",
  lineHeight: " 21px",
  textAlign: "center",
  letterSpacing: "2px",
  textTransform: "uppercase",

 ':hover':{
       
    }
  
};
