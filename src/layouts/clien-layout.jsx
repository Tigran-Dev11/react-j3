import Header from "./../compoents/header/index";
import { Outlet } from "react-router-dom";
import Footer from "./../compoents/footer/index";
const ClienLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClienLayout;
