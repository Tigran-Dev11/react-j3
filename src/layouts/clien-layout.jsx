import Header from "/src/compoents/header/index";
import { Outlet } from "react-router-dom";
import Footer from "/src/compoents/footer/index";

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
