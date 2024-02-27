import "./style.css";
import  CreateMenuNavbar from "./../creatingFunctions/index"
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
