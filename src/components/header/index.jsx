import "./style.css";
import  CreateMenuNavbar from './../helpers/helpers.js'
const Navbar = () => {
  return (
    <nav>
      <p>V E L O C I T Y</p>
   <div className="menu-liner">
   <CreateMenuNavbar />
   </div>
    </nav>
  );
};
export default Navbar;
