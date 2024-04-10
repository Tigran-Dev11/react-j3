import { Outlet } from "react-router-dom";
import "./style.css";

const ClientLayout = () => {
  return (
    <div className="container">
      <header>Header</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default ClientLayout;
