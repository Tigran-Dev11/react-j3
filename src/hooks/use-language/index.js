import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useLanguageRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
    if (lngKey) {
      const locationArray = location.pathname.split("/");
      locationArray[1] = lngKey;
      navigate(locationArray.join("/"));
    }
  }, [location.pathname, navigate]);
};
