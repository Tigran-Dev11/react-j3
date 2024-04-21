import Header from "/src/compoents/header/index";
import { Outlet } from "react-router-dom";
import Footer from "/src/compoents/footer/index";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ClienLayout = () => {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

  }, [location]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClienLayout;
