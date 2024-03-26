import React ,{ useEffect } from "react";
import Footer from "./components/footer";
import { Header } from "./components/header";
import Router from "./routes/routes";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

    if (lngKey) {
      const locationArray = location.pathname.split("/");

      locationArray[1] = lngKey;

      navigate(locationArray.join("/"));
    }
  }, []);

  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
