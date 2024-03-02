import "./style.css"

 export const Button =({title})=>{
    return (
        <button  className="btn">{title}</button>
    )
}


const ButtonForSection =({title, type})=>{
    return(
        <button type={type} className="btn-section">{title}</button>
    )
}
export default ButtonForSection