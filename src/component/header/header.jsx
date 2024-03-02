import { ROUTES } from "../../utils/const";
import "./header.css"
import { NavLink } from "react-router-dom";


const Header = () => {

    return (
        <nav>

            <NavLink to={ROUTES.carriers}>

Carriers

            </NavLink>


            <NavLink to={ROUTES.about}>
About

            </NavLink>

            <NavLink to={ROUTES.tecnologies}>

Tecnology
            </NavLink>

            <NavLink to={ROUTES.subscriber}>

Subscriber
            </NavLink>



        </nav>
    )

};



export default Header