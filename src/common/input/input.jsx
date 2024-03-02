import './style.css'

const Input = ({placeholder})=>{
    return(
        <input  placeholder={placeholder} type="email" className='input'/>
    )
}
export default Input

export const InputMessage = ({placeholder})=>{
    return(
        <input type="text" placeholder={placeholder} className='input-message'/>
    )
}