import { Outlet } from "react-router-dom";
import "./style.css";

const AdminLayout = () => {
  return (
    <div className="admin-container">
       <div className="nav">

       </div>
       <div className="right-section">
          <header>header</header>
         <Outlet/>
       </div>
    </div>
  );
};

export default AdminLayout;