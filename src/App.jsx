import { useEffect } from "react";
import Header from "./compoents/header";
import Router from "./routes/route";
import { useLocation, useNavigate } from "react-router";


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
    <>
    <Header/>
      <Router/>
    </>
  );
}

export default App;
